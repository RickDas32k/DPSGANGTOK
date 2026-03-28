# Delhi Public School Gangtok - Manual Edit Guide

## 📍 Website Information
- **Live URL**: https://dps-gangtok.preview.emergentagent.com
- **Type**: Static Frontend-Only Website (No Backend Required)
- **Framework**: React with Tailwind CSS

---

## 📝 How to Manually Edit Website Content

All website content is stored in a single file for easy editing:

### Main Data File
**Location**: `/app/frontend/src/mockData.js`

This file contains ALL the content you can edit:

### 1️⃣ School Information
```javascript
export const schoolInfo = {
  name: "DELHI PUBLIC SCHOOL",
  subtitle: "CO-ED. SR. SECONDARY SCHOOL",
  affiliation: "AFFILIATED TO C.B.S.E | VIDE NO. 3430088",
  location: "Gangtok",
  phone1: "9609010901",
  phone2: "9609010901",
  email: "info@dpsgangtok.com",
  address: "5th Mile, Lumsey, opposite S.T.C.S. Gas Godown, Upper Tadong, Tadong, Gangtok, Sikkim 737102"
};
```

### 2️⃣ Facilities (12 items)
```javascript
export const facilities = [
  {
    id: 1,
    name: "LABORATORIES",
    image: "URL_HERE",
    description: "Your description here"
  },
  // ... edit each facility
];
```

### 3️⃣ Notices
```javascript
export const notices = [
  {
    id: 1,
    title: "Your Notice Title",
    date: "2025-01-15",
    description: "Notice description"
  },
  // ... add or edit notices
];
```

### 4️⃣ Events
```javascript
export const events = [
  {
    id: 1,
    title: "Event Name",
    date: "2025-01-25",
    image: "URL_HERE",
    description: "Event description"
  },
  // ... add or edit events
];
```

### 5️⃣ Gallery Images
```javascript
export const galleryImages = [
  "image_url_1",
  "image_url_2",
  // ... add or replace image URLs
];
```

### 6️⃣ Pro Vice Chairman Message
```javascript
export const founderMessage = {
  name: "Mr. Sandeep Killa",
  designation: "PRO VICE CHAIRMAN",
  image: "URL_HERE",
  message: `Your message here...`
};
```

### 7️⃣ Principal Message
```javascript
export const principalMessage = {
  name: "Dr. Ravi Varma",
  designation: "PRINCIPAL",
  image: "URL_HERE",
  message: `Your message here...`
};
```

### 8️⃣ Management Team
```javascript
export const managementTeam = [
  {
    id: 1,
    name: "Mr. Kanishk Killa",
    designation: "DIRECTOR",
    image: "URL_HERE"
  },
  {
    id: 2,
    name: "Mrs. Dolly Panday",
    designation: "HEAD MISTRESS",
    image: "URL_HERE"
  },
  {
    id: 3,
    name: "Dr. Ravi Varma",
    designation: "PRINCIPAL",
    image: "URL_HERE"
  }
];
```

---

## 🗺️ Google Maps Integration

**Location**: `/app/frontend/src/pages/Contact.jsx`

The Google Maps embed is already configured for your address. If you need to update it:

1. Go to [Google Maps](https://maps.google.com)
2. Search for your address
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL
5. Replace the `src` attribute in Contact.jsx

Current address set: **5th Mile, Lumsey, opposite S.T.C.S. Gas Godown, Upper Tadong, Tadong, Gangtok, Sikkim 737102**

---

## 🎨 How to Change Images

### Option 1: Use Image URLs
- Find free images from [Unsplash](https://unsplash.com) or [Pexels](https://pexels.com)
- Copy the image URL
- Paste it in the `image` field in mockData.js

### Option 2: Use Your Own Images
1. Upload images to a free image hosting service like [ImgBB](https://imgbb.com) or [Cloudinary](https://cloudinary.com)
2. Get the direct image URL
3. Update the URL in mockData.js

---

## 🔧 After Making Changes

1. Open `/app/frontend/src/mockData.js`
2. Make your changes
3. Save the file
4. The website will automatically reload with your changes (hot reload enabled)

---

## 📄 Pages Overview

1. **Home** (`/`) - Main landing page
2. **Gallery** (`/gallery`) - Photo gallery
3. **Contact** (`/contact`) - Contact form and information
4. **Facility** (`/facility`) - All facilities with descriptions
5. **Admission** (`/admission`) - Admission process and enquiry form
6. **Academics** (`/academics`) - Academic information

---

## ⚠️ Important Notes

- This is a **static website** - all data is in mockData.js
- No database required
- Forms show success messages but don't save data (you can add backend later if needed)
- The website is fully responsive (works on mobile, tablet, desktop)
- All changes in mockData.js reflect immediately

---

## 🆘 Need Help?

If you need to make changes beyond editing content (like layout, colors, design), you'll need to edit the React components in `/app/frontend/src/pages/` and `/app/frontend/src/components/`

---

## Current Personnel Details

- **Principal**: Dr. Ravi Varma
- **Head Mistress**: Mrs. Dolly Panday
- **Director**: Mr. Kanishk Killa
- **Pro Vice Chairman**: Mr. Sandeep Killa
- **Email**: info@dpsgangtok.com
- **Phone**: +91-9609010901
- **Address**: 5th Mile, Lumsey, opposite S.T.C.S. Gas Godown, Upper Tadong, Tadong, Gangtok, Sikkim 737102
