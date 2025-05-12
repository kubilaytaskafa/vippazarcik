import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { sendWhatsAppMessage } from "../utils/whatsapp";
import {
  FaPlane,
  FaHotel,
  FaCar,
  FaCalendarAlt,
  FaClock,
  FaUsers,
  FaSuitcase,
  FaStickyNote,
} from "react-icons/fa";
import {
  setPickupType,
  setDropoffType,
  setPickupPoint,
  setDropoffPoint,
  setSelectedCar,
  setSelectedHotelRegion,
  setPickupCity,
  setDropoffCity,
} from "../store/slices/locationsSlice";

const ReservationForm = ({ onSubmit }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const {
    pickupType,
    dropoffType,
    pickupPoint,
    dropoffPoint,
    selectedCar,
    selectedHotelRegion,
    pickupCity,
    dropoffCity,
    airports,
    hotelRegions,
  } = useSelector((state) => state.locations);
  const cars = useSelector((state) => state.cars.cars);

  // Form validasyon şeması
  const validationSchema = Yup.object().shape({
    pickupType: Yup.string().required(t("validation.required")),
    dropoffType: Yup.string().required(t("validation.required")),
    selectedPickupRegion: Yup.string().when("pickupType", {
      is: "hotel",
      then: () => Yup.string().required(t("validation.required")),
    }),
    selectedHotelRegion: Yup.string().when("dropoffType", {
      is: "hotel",
      then: () => Yup.string().required(t("validation.required")),
    }),
    pickupPoint: Yup.string().required(t("validation.required")),
    dropoffPoint: Yup.string().required(t("validation.required")),
    selectedCar: Yup.string().required(t("validation.required")),
    adults: Yup.number()
      .required(t("validation.required"))
      .min(1, t("validation.minAdults"))
      .integer(t("validation.integer")),
    children: Yup.number()
      .required(t("validation.required"))
      .min(0, t("validation.minChildren"))
      .integer(t("validation.integer")),
    luggage: Yup.number()
      .required(t("validation.required"))
      .min(0, t("validation.minLuggage"))
      .integer(t("validation.integer")),
    date: Yup.date()
      .required(t("validation.required"))
      .min(new Date(), t("validation.futureDate")),
    time: Yup.string().required(t("validation.required")),
  });

  // Form başlangıç değerleri
  const initialValues = {
    pickupType: "",
    dropoffType: "",
    selectedPickupRegion: "",
    selectedHotelRegion: "",
    pickupPoint: "",
    dropoffPoint: "",
    selectedCar: "",
    adults: 1,
    children: 0,
    luggage: 1,
    date: "",
    time: "",
    message: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Seçilen aracın detaylarını bul
    const selectedCarDetails = cars.find(
      (car) => car.id === values.selectedCar
    );

    // Form verilerini birleştir
    const formData = {
      ...values,
      pickupCity,
      dropoffCity,
      pickupType: values.pickupType,
      dropoffType: values.dropoffType,
      pickupPoint: values.pickupPoint,
      dropoffPoint: values.dropoffPoint,
      selectedPickupRegion: values.selectedPickupRegion,
      selectedHotelRegion: values.selectedHotelRegion,
      selectedCar: values.selectedCar,
      adults: values.adults,
      children: values.children,
      luggage: values.luggage,
      date: values.date,
      time: values.time,
      message: values.message,
    };

    // WhatsApp mesajını oluştur
    const message = `
🚗 *VIPPAZARCIK - YENİ REZERVASYON TALEBİ* 🚗

📌 *ALIŞ BİLGİLERİ*
━━━━━━━━━━━━━━━━━━━━━━━━
🏙️ Şehir: *${formData.pickupCity}*
📍 Tür: *${t(`reservation.${formData.pickupType}`)}*
🗺️ Bölge: *${formData.selectedPickupRegion || "-"}*
🎯 Nokta: *${formData.pickupPoint}*

📌 *BIRAKIŞ BİLGİLERİ*
━━━━━━━━━━━━━━━━━━━━━━━━
🏙️ Şehir: *${formData.dropoffCity}*
📍 Tür: *${t(`reservation.${formData.dropoffType}`)}*
🗺️ Bölge: *${formData.selectedHotelRegion || "-"}*
🎯 Nokta: *${formData.dropoffPoint}*

🚘 *ARAÇ BİLGİLERİ*
━━━━━━━━━━━━━━━━━━━━━━━━
🚗 Araç: *${selectedCarDetails?.name || "-"}*
👥 Kapasite: *${selectedCarDetails?.capacity || "-"} ${t(
      "home.cars.passengers"
    )}*
💰 Fiyat: *${
      formData.pickupType === "airport"
        ? `${selectedCarDetails?.prices?.airport || 0}€`
        : `${selectedCarDetails?.prices?.hotel || 0}€`
    }*

👥 *YOLCU BİLGİLERİ*
━━━━━━━━━━━━━━━━━━━━━━━━
👨‍👩‍👧‍👦 Yetişkin: *${formData.adults}*
👶 Çocuk: *${formData.children}*
🧳 Bagaj: *${formData.luggage}*

📅 *TARİH VE SAAT*
━━━━━━━━━━━━━━━━━━━━━━━━
📆 Tarih: *${formData.date}*
⏰ Saat: *${formData.time}*

📝 *EK NOTLAR*
━━━━━━━━━━━━━━━━━━━━━━━━
${formData.message || "Ek not bulunmuyor."}

━━━━━━━━━━━━━━━━━━━━━━━━
💫 *VIPPAZARCIK - PROFESYONEL HİZMET* 💫
    `.trim();

    // WhatsApp mesajını gönder
    sendWhatsAppMessage(message);
    setSubmitting(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        {t("reservation.form.title")}
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form className="space-y-4">
            {/* Alış Şehri */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="block text-base font-medium text-gray-700 mb-2">
                {t("reservation.pickupCity")}
              </label>
              <select
                value={pickupCity}
                onChange={(e) => {
                  dispatch(setPickupCity(e.target.value));
                }}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-base"
                required
              >
                <option value="">{t("reservation.selectCity")}</option>
                {Object.keys(airports).map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Bırakış Şehri */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="block text-base font-medium text-gray-700 mb-2">
                {t("reservation.dropoffCity")}
              </label>
              <select
                value={dropoffCity}
                onChange={(e) => {
                  dispatch(setDropoffCity(e.target.value));
                }}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-base"
                required
              >
                <option value="">{t("reservation.selectCity")}</option>
                {Object.keys(airports).map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Alış Tipi */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="block text-base font-medium text-gray-700 mb-2">
                {t("reservation.pickupType")}
              </label>
              <Field
                as="select"
                name="pickupType"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-base"
                onChange={(e) => {
                  setFieldValue("pickupType", e.target.value);
                  dispatch(setPickupType(e.target.value));
                }}
              >
                <option value="">{t("reservation.selectType")}</option>
                <option value="hotel">{t("reservation.hotel")}</option>
                <option value="airport">{t("reservation.airport")}</option>
              </Field>
              <ErrorMessage
                name="pickupType"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Alış Noktası */}
            {values.pickupType === "hotel" && (
              <>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="block text-base font-medium text-gray-700 mb-2">
                    {t("reservation.pickupRegion")}
                  </label>
                  <Field
                    as="select"
                    name="selectedPickupRegion"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-base"
                    onChange={(e) => {
                      setFieldValue("selectedPickupRegion", e.target.value);
                      setFieldValue("pickupPoint", "");
                      dispatch(setSelectedHotelRegion(e.target.value));
                    }}
                  >
                    <option value="">{t("reservation.selectRegion")}</option>
                    {Object.keys(hotelRegions.Antalya).map((region) => (
                      <option key={region} value={region}>
                        {region}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="selectedPickupRegion"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {values.selectedPickupRegion && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="block text-base font-medium text-gray-700 mb-2">
                      {t("reservation.pickupPoint")}
                    </label>
                    <Field
                      as="select"
                      name="pickupPoint"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-base"
                      onChange={(e) => {
                        setFieldValue("pickupPoint", e.target.value);
                        dispatch(setPickupPoint(e.target.value));
                      }}
                    >
                      <option value="">{t("reservation.selectHotel")}</option>
                      {hotelRegions.Antalya[values.selectedPickupRegion]?.map(
                        (hotel) => (
                          <option key={hotel} value={hotel}>
                            {hotel}
                          </option>
                        )
                      )}
                    </Field>
                    <ErrorMessage
                      name="pickupPoint"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                )}
              </>
            )}

            {values.pickupType === "airport" && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-base font-medium text-gray-700 mb-2">
                  {t("reservation.pickupPoint")}
                </label>
                <Field
                  as="select"
                  name="pickupPoint"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-base"
                  onChange={(e) => {
                    setFieldValue("pickupPoint", e.target.value);
                    dispatch(setPickupPoint(e.target.value));
                  }}
                >
                  <option value="">{t("reservation.selectPoint")}</option>
                  {airports.Antalya.map((airport) => (
                    <option key={airport} value={airport}>
                      {airport}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="pickupPoint"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            )}

            {/* Bırakış Tipi */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="block text-base font-medium text-gray-700 mb-2">
                {t("reservation.dropoffType")}
              </label>
              <Field
                as="select"
                name="dropoffType"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-base"
                onChange={(e) => {
                  setFieldValue("dropoffType", e.target.value);
                  dispatch(setDropoffType(e.target.value));
                }}
              >
                <option value="">{t("reservation.selectType")}</option>
                <option value="hotel">{t("reservation.hotel")}</option>
                <option value="airport">{t("reservation.airport")}</option>
              </Field>
              <ErrorMessage
                name="dropoffType"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Bırakış Noktası */}
            {values.dropoffType === "hotel" && (
              <>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="block text-base font-medium text-gray-700 mb-2">
                    {t("reservation.dropoffRegion")}
                  </label>
                  <Field
                    as="select"
                    name="selectedHotelRegion"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-base"
                    onChange={(e) => {
                      setFieldValue("selectedHotelRegion", e.target.value);
                      setFieldValue("dropoffPoint", "");
                      dispatch(setSelectedHotelRegion(e.target.value));
                    }}
                  >
                    <option value="">{t("reservation.selectRegion")}</option>
                    {Object.keys(hotelRegions.Antalya).map((region) => (
                      <option key={region} value={region}>
                        {region}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="selectedHotelRegion"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {values.selectedHotelRegion && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="block text-base font-medium text-gray-700 mb-2">
                      {t("reservation.dropoffPoint")}
                    </label>
                    <Field
                      as="select"
                      name="dropoffPoint"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-base"
                      onChange={(e) => {
                        setFieldValue("dropoffPoint", e.target.value);
                        dispatch(setDropoffPoint(e.target.value));
                      }}
                    >
                      <option value="">{t("reservation.selectHotel")}</option>
                      {hotelRegions.Antalya[values.selectedHotelRegion]?.map(
                        (hotel) => (
                          <option key={hotel} value={hotel}>
                            {hotel}
                          </option>
                        )
                      )}
                    </Field>
                    <ErrorMessage
                      name="dropoffPoint"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                )}
              </>
            )}

            {values.dropoffType === "airport" && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-base font-medium text-gray-700 mb-2">
                  {t("reservation.dropoffPoint")}
                </label>
                <Field
                  as="select"
                  name="dropoffPoint"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-base"
                  onChange={(e) => {
                    setFieldValue("dropoffPoint", e.target.value);
                    dispatch(setDropoffPoint(e.target.value));
                  }}
                >
                  <option value="">{t("reservation.selectPoint")}</option>
                  {airports.Antalya.map((airport) => (
                    <option key={airport} value={airport}>
                      {airport}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="dropoffPoint"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            )}

            {/* Tarih ve Saat */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-base font-medium text-gray-700 mb-2">
                  {t("reservation.date")}
                </label>
                <Field
                  type="date"
                  name="date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-base"
                />
                <ErrorMessage
                  name="date"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-base font-medium text-gray-700 mb-2">
                  {t("reservation.time")}
                </label>
                <Field
                  type="time"
                  name="time"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-base"
                />
                <ErrorMessage
                  name="time"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            {/* Yolcu ve Bagaj Bilgileri */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-base font-medium text-gray-700 mb-2">
                  {t("reservation.adults")}
                </label>
                <div className="flex items-center">
                  <Field
                    type="number"
                    name="adults"
                    min="1"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-base"
                  />
                  <span className="ml-2 text-gray-500 text-base">
                    {t("home.cars.passengers")}
                  </span>
                </div>
                <ErrorMessage
                  name="adults"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-base font-medium text-gray-700 mb-2">
                  {t("reservation.children")}
                </label>
                <div className="flex items-center">
                  <Field
                    type="number"
                    name="children"
                    min="0"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-base"
                  />
                  <span className="ml-2 text-gray-500 text-base">
                    {t("home.cars.passengers")}
                  </span>
                </div>
                <ErrorMessage
                  name="children"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-base font-medium text-gray-700 mb-2">
                  {t("reservation.luggage")}
                </label>
                <div className="flex items-center space-x-2">
                  <Field
                    type="number"
                    name="luggage"
                    min="0"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-base"
                  />
                  <span className="text-gray-500 text-base whitespace-nowrap">
                    {t("reservation.luggageUnit")}
                  </span>
                </div>
                <ErrorMessage
                  name="luggage"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            {/* Araç Seçimi */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="block text-base font-medium text-gray-700 mb-2">
                {t("reservation.car")}
              </label>
              <Field
                as="select"
                name="selectedCar"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-base"
                onChange={(e) => {
                  setFieldValue("selectedCar", e.target.value);
                  dispatch(setSelectedCar(e.target.value));
                }}
              >
                <option value="">{t("reservation.selectCar")}</option>
                {cars.map((car) => (
                  <option key={car.id} value={car.id}>
                    {car.name} - {car.capacity} {t("home.cars.passengers")} -{" "}
                    {values.pickupType === "airport"
                      ? `${car.prices?.airport || 0}€`
                      : `${car.prices?.hotel || 0}€`}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="selectedCar"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Mesaj */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="block text-base font-medium text-gray-700 mb-2">
                {t("reservation.message")}
              </label>
              <Field
                as="textarea"
                name="message"
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-base"
                placeholder={t("reservation.messagePlaceholder")}
              />
            </div>

            {/* Gönder Butonu */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors disabled:bg-opacity-50 font-medium text-lg"
              >
                {isSubmitting ? t("common.loading") : t("reservation.submit")}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ReservationForm;
