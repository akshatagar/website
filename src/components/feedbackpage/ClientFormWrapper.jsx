// 'use client';

// import dynamic from 'next/dynamic';

// const FeedbackForm = dynamic(
//   () => import('./FeedbackForm'),
//   { 
//     ssr: false,
//     loading: () => <p>Loading form...</p>
//   }
// );

// export default function ClientFormWrapper() {
//   return (
//     <div className="container my-5">
//       <FeedbackForm />
//     </div>
//   );
// }