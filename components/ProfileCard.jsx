// src/components/ProfileCard.jsx
"use client";

import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FiUser, FiLogOut } from "react-icons/fi";

export default function ProfileCard({ open, onClose }) {
  const ref = useRef();
  const [user, setUser] = useState(null);
  const rawToken =
    typeof window !== "undefined" && localStorage.getItem("authToken");

  // click-outside to close
  useEffect(() => {
    const onClick = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open, onClose]);

  // fetch user
  useEffect(() => {
    if (!open || !rawToken) return;

    // pick prefix based on the shape of the token
    const isJwt = rawToken.split(".").length === 3;
    const headerValue = isJwt
      ? `Bearer ${rawToken}`
      : `Token ${rawToken}`;

    axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/user/`, {
        headers: { Authorization: headerValue },
      })
      .then((r) => setUser(r.data))
      .catch(() => setUser(null));
  }, [open, rawToken]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      className="
        fixed top-16 right-4 w-64 bg-white rounded-2xl shadow-xl
        ring-1 ring-black/10 overflow-hidden z-50
        animate-fade-in-down
      "
    >
      <div className="px-6 py-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
            <FiUser size={20} />
          </div>
          <div>
            <p className="font-semibold text-gray-800">
              {user?.username || "—"}
            </p>
            <p className="text-sm text-gray-500">{user?.email || "—"}</p>
          </div>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem("authToken");
            window.location.reload();
          }}
          className="
            w-full flex items-center justify-center gap-2
            py-2 rounded-full bg-red-100 text-red-600 font-medium
            hover:bg-red-500 hover:text-white transition
          "
        >
          <FiLogOut /> Logout
        </button>
      </div>
    </div>
  );
}
