/* Auth APIs */
export const BASE_URL = 'http://api-server-test.carcility.com';
export const SIGNUP = BASE_URL + '/auth/signup';
export const SIGNIN = BASE_URL + '/auth/login';
export const SOCIAL_AUTH = BASE_URL + '/auth/socialsignin';
export const FORGOT_PASSWORD = BASE_URL + '/auth/forgot-password';
export const VERIFY_OTP = BASE_URL + '/api/users/verifyotp/';
export const VERIFY_EMAIL = BASE_URL + '/auth/verifyemail';
export const REQUEST_OTP = BASE_URL + '/api/users/otp';
export const RESET_PASSWORD = BASE_URL + '/auth/reset-password';
export const LOGOUT = BASE_URL + '/api/users/logout';

/*User Account APIs */
export const CHANGE_PASSWORD = BASE_URL + '/api/users/changepassword';
export const GET_NOTIFICATIOINFO = BASE_URL + '/api/users/notification';
export const CONTACTDETAILSUPDATE = BASE_URL + '/api/users/contactdetails';
export const SENDOTP = BASE_URL + '/api/users/sendotp';

/* Common APIs */
export const GOOGLE_PLACES_SEARCH = 'https://maps.googleapis.com/maps/api/place/nearbysearch/output';
export const GOOGLE_GEO_CODE = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=';
export const GOOGLE_PLACES_AUTOCOMPLETE = 'https://maps.googleapis.com/maps/api/place/autocomplete/output?parameters'
export const USER_LOCATION = BASE_URL + '/api/users/location/';
export const GET_AUTO_SUGGESTED_LIST = BASE_URL + '/api/services/searchlist';
export const SEARCH_VENDORS = BASE_URL + '/api/services/business/search';
export const GET_GARAGE_PROFILE = BASE_URL + '/api/vendor/profiledetail';

/* Car Profile APIs */
export const CREATE_CAR_PROFILE = BASE_URL + '/api/vehicles';
export const CURRENT_USER_DETAILS = BASE_URL + '/api/users/me';
export const LIST_CAR_PROFILES = BASE_URL + '/api/vehicles';
export const EDIT_CAR_PROFILES = BASE_URL + '/api/vehicles/';
export const GET_CAR_PROFILE_DETAILS = BASE_URL + '/api/vehicles/';
export const DELETE_CAR_PROFILE = BASE_URL + '/api/vehicles/';
export const CAR_MAKE_AND_MODELS = BASE_URL + '/api/cars';
export const DELETE_VEHICLE_IMAGE = BASE_URL + '/api/vehicles/image/';
export const SET_COVER_FOR_CAR_PROFILE = BASE_URL + '/api/vehicles/changeCover';

/*Book Service APIs*/
export const GET_ALL_SERVICES = BASE_URL + '/api/services';
export const CREATE_BOOKING_REQUEST = BASE_URL + '/api/bookingrequest/createjobrequest';
export const GET_ALL_CANCEL_REASONS = BASE_URL + '/api/bookingrequest/cancellationreasons';
export const BOOKING_UPLOAD_IMAGES = BASE_URL + '/api/bookingrequest/uploadimage';
export const BOOKING_UPLOAD_FILES = BASE_URL + '/api/bookingrequest/uploadfiles';
export const CANCEL_USER_BOOKING_REQUEST = BASE_URL + '/api/bookingrequest/cancelrequest';

/* Booking Requests */
export const GET_ALL_BOOKING_REQUESTS = BASE_URL + "/api/bookingrequest";
export const GET_BOOKING_REQUESTS_DETAILS = BASE_URL + "/api/bookingrequest/";
export const GET_VENDOR_QUOTES_LIST = BASE_URL + '/api/bookingrequest/getquotes';
export const GET_QUOTES_PRICING_DETAILS = BASE_URL + '/api/bookingrequest/getquotedetail';
export const ACCEPT_QUOTES = BASE_URL + '/api/bookingrequest/acceptquote';

/* Favourites */
export const GET_FAVOURITE_VENDORS = BASE_URL + '/api/users/markasfavouritegarage';
export const CHANGE_FAVOURITE_SELECTION = BASE_URL + '/api/users/markasfavouritegarage';

/* Notifications */
export const GET_NOTIFICATION_ALERTS = BASE_URL + '/api/notifications/alerts'
