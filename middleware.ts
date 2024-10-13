import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes:[
    '/',
    '/about',
    '/blog',
    '/blog-details',
    '/contact',
    '/error'
  ]
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};