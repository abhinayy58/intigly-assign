# Intigly-assign App

A responsive and interactive Pokemon discovery web application built with **React**, **React Router**, **TanStack Query**, and **Tailwind CSS**.

Users can browse Pokemon using infinite scrolling, add their favorites to a personal collection, and reorder them via drag-and-drop.

---

## 🚀 Live Link http://chipper-starburst-f1b72b.netlify.app/collection .

## 🚀 Features

- 🔍 **Pokemon Discovery**

  - Infinite scrolling using Intersection Observer
  - Each Pokemon displays image, name, types, and stats
  - Add to collection with a single click

- 📁 **My Collection**

  - View added Pokemon
  - Drag and drop to reorder
  - Persistent using `localStorage`

- ⚙️ **Tech Stack**
  - React (Functional Components & Hooks)
  - TanStack React Query (v5)
  - Tailwind CSS
  - React Router
  - Intersection Observer API
  - PokeAPI

---

## 📁 Folder Structure

src/
├── components/
│ ├── Header.jsx # Navigation bar with routing
│ ├── Button.jsx # Reusable styled button
| ├── Footer.jsx # Footer Component
│ └── PokemonCard.jsx # Individual Pokemon display card
├── pages/
│ ├── Main.jsx # Discovery page (infinite scroll)
│ └── Collection.jsx # My Collection (drag-and-drop)
├── App.jsx
├── index.js

---

## 🧱 Components

### 🔹 `Header.jsx`

Fixed top navbar with navigation between **Discovery** and **Collection** using `react-router-dom`. Responsive and styled with Tailwind.

### 🔹 `Button.jsx`

A customizable button component with Tailwind styles, used for the `+` action to add Pokemon.

---

## 📦 Installation

```bash
git clone https://github.com/abhinayy58/intigly-assign.git
cd intigly-assign
npm install
npm run dev

Open http://localhost:5173 to view it in the browser.

```
