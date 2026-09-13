// ---------------------------------------------------------------------------
// Edit these to match your actual store. Everything here shows up on the
// online store — no code changes needed elsewhere.
//
// The store name, logo, colours and delivery zones are NOT here — those are set
// in the POS (Reports → store name & design, and the delivery areas block) so
// they can be changed from your phone without touching a file.
// ---------------------------------------------------------------------------
window.STORE_CONFIG = {
  name: "Your Store Name",              // only used before the POS settings load
  tagline: "Batad, Iloilo",

  contactNumber: "09XXXXXXXXX",         // shown to customers for questions
  gcashNumber: "09XXXXXXXXX",           // where customers send GCash payment
  gcashName: "Juan Dela Cruz",          // the name on that GCash account

  // Your Facebook Page's username — the part after facebook.com/ in its
  // address. If your page is facebook.com/TindahanNiGloria then put
  // "TindahanNiGloria" here. Leave it as "" to hide the Messenger buttons.
  //
  // It must be a PAGE, not a personal profile: only pages can be messaged by
  // people who aren't your friends.
  messengerPage: "",

  deliveryNote: "Delivery available within Batad. We'll confirm the fee when we contact you.",
  pickupNote: "Pickup at the store — we'll text you when your order is ready."
};
