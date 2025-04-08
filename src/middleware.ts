import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // 静的ファイルやNext.js内部ファイルを除外
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // APIルートは常に対象
    "/api/(.*)",
  ],
};

// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware();

// export const config = {
//   matcher: [
// // Skip Next.js internals and all static files, unless found in search params
// "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
// "/((?!_next|.*\\.(?:.*)|api/webhooks/).*)",
// // Always run for API routes
// "/api/(.*)",
//   ],
// };
