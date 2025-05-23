import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const DentalClinicSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  // Real Google Reviews Data matching the screenshots
  const reviews = [
    {
      name: "NA ALs",
      rating: 5,
      text: "ثالث زيارة لدكتور محمد الجبشاني وبكل صدق رايح في عمله وابده خفيفه في احروات في",
      timeAgo: "16 days ago",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      verified: true
    },
    {
      name: "Ayman Sadek",
      rating: 5,
      text: "Good service",
      timeAgo: "16 days ago",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      verified: true
    },
    {
      name: "Badr",
      rating: 5,
      text: "الدكتور محمد الجبشاني من أروع الأطباء اللي تعاملت معهم، أسلوب راقي واهتمام بكل التفاصيل. بيئة خفيفة",
      timeAgo: "1 month ago",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
      verified: true,
      initial: "B"
    },
    {
      name: "Nouf Halawani",
      rating: 5,
      text: "أول زيارة لي لدكتور محمد الجبشاني إلى جانب احترم تعويضات المراجعين ودان دكتور محمد بيدو خفيفة ف الأبرة",
      timeAgo: "2 months ago",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      verified: true
    },
    {
      name: "R Alasmry",
      rating: 5,
      text: "دكتور محمد قسم ماشاء الله قمة في التعامل والراقي وإعطاء المريض بفرصة للاستفسار والذي يشعر",
      timeAgo: "2 months ago",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      verified: true
    }
  ];

  // Auto-scroll reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % Math.ceil(reviews.length));
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % Math.ceil(reviews.length));
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + Math.ceil(reviews.length)) % Math.ceil(reviews.length));
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  // Calculate visible reviews (show 5 at a time on desktop, 1 on mobile)
  const getVisibleReviews = () => {
    const reviewsToShow = 5;
    const startIndex = currentReview;
    const visibleReviews = [];
    
    for (let i = 0; i < reviewsToShow; i++) {
      const index = (startIndex + i) % reviews.length;
      visibleReviews.push(reviews[index]);
    }
    
    return visibleReviews;
  };

  return (
    <div className="w-full">
      {/* Google Reviews Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              What Our Customers Say
            </h2>
          </div>

          {/* Google Reviews Widget Header */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6 max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-xl font-semibold text-gray-800">Google</span>
                  <span className="text-xl font-normal text-gray-800">Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-800">4.4</span>
                  <div className="flex">{renderStars(4)}</div>
                  <span className="text-gray-600">(447)</span>
                </div>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition-colors">
                Review us on Google
              </button>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {getVisibleReviews().map((review, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="relative">
                      {review.initial ? (
                        <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                          {review.initial}
                        </div>
                      ) : (
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-10 h-10 rounded-full"
                        />
                      )}
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-gray-800">{review.name}</h4>
                        {review.verified && (
                          <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <div className="text-sm text-gray-500 mb-2">{review.timeAgo}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">{renderStars(review.rating)}</div>
                  <p className="text-sm text-gray-700 line-clamp-3">{review.text}</p>
                  <button className="text-blue-500 text-sm mt-2 hover:underline">Read more</button>
                </div>
              ))}
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: Math.ceil(reviews.length / 5) }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index * 5)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    Math.floor(currentReview / 5) === index ? 'bg-gray-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-center mt-6 text-sm text-gray-500">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              Free Google Reviews widget
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section with Background Image */}
      <section className="relative h-96 bg-cover bg-center bg-no-repeat"
               style={{
                 backgroundImage: `url('IMG_20.JPG')`
               }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="animate-fade-in">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">20+</div>
                <div className="text-xl text-gray-200">Years</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">100k+</div>
                <div className="text-xl text-gray-200">Smiles</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">40+</div>
                <div className="text-xl text-gray-200">Doctors</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">8+</div>
                <div className="text-xl text-gray-200">Branches</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Appointment CTA Section */}
      <section className="bg-gradient-to-br from-cyan-200 to-teal-200 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div 
            className="relative rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat h-96 flex items-center justify-center"
            style={{
              backgroundImage: `url('docss.avif')`
            }}
          >
            {/* Content directly over image */}
            <div className="text-center text-white px-8">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                Book an Appointment Today
              </h2>
              <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
                Start your smile journey at Quality Clinics Dental Practice, Saudi Arabia
              </p>
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-12 rounded-full text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default DentalClinicSection;