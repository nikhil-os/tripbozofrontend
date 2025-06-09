"use client";
import React from "react";
import Link from "next/link";

export default function ErrorPage({ statusCode, errorType }) {
  let title = "Oops! Something went wrong.";
  let message = "We couldn't find the page you were looking for.";
  let illustration = "/globe.svg";
  let action = { href: "/", label: "Go Home" };

  if (statusCode === 404) {
    title = "404 - Page Not Found";
    message = "Looks like you took a wrong turn. The page you’re looking for doesn’t exist.";
    illustration = "/Images/hero.jpg";
  } else if (errorType === "offline") {
    title = "No Internet Connection";
    message = "Oops! You lost your network. Please check your connection and try again.";
    illustration = "/Images/home.jpg";
    action = { href: "#", label: "Retry" };
  } else if (statusCode === 500) {
    title = "500 - Server Error";
    message = "Our servers are having a moment. Please try again later.";
    illustration = "/Images/hero.jpg";
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-teal-100 to-white px-4 py-12">
      <img src={illustration} alt="Error Illustration" className="w-48 h-48 mb-8 rounded-2xl shadow-lg object-cover animate-bounce-slow" />
      <h1 className="text-5xl font-extrabold text-teal-600 mb-4 drop-shadow-lg">{title}</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">{message}</p>
      <Link href={action.href} className="inline-block px-8 py-3 bg-teal-500 text-white text-lg font-bold rounded-full shadow-lg hover:bg-blue-500 transition-all duration-200">
        {action.label}
      </Link>
      <div className="mt-10 text-gray-400 text-sm">If you think this is a mistake, contact <a href="mailto:support@tripbozo.com" className="underline hover:text-teal-600">support@tripbozo.com</a></div>
    </div>
  );
}
