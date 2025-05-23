import React from 'react';

const StackingTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alhussam India Cochin",
      quote: "Unprofessional. No one there to pick up phone calls. Just keep on saying you are next and to wait for 1 minute and you must wait 10 minutes and drops the call",
      rating: 1
    },
    {
      id: 2,
      name: "Sarah Johnson",
      quote: "Outstanding service and professional staff. The treatment was exceptional and I felt well cared for throughout my visit.",
      rating: 5
    },
    {
      id: 3,
      name: "Michael Chen",
      quote: "Quick appointment scheduling and minimal wait times. The doctors are knowledgeable and take time to explain everything clearly.",
      rating: 5
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      quote: "Clean facilities and modern equipment. Staff is friendly and the overall experience exceeded my expectations.",
      rating: 4
    },
    {
      id: 5,
      name: "David Thompson",
      quote: "Excellent patient care and follow-up. They really go the extra mile to ensure you're comfortable and well-informed.",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-blue-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start min-h-[200vh]">
          
          {/* Left Column - Fixed Content */}
          <div className="lg:sticky lg:top-20">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 leading-tight">
              Patient Testimonials
            </h1>
            <p className="text-gray-300 text-lg lg:text-xl leading-relaxed mb-10 max-w-lg">
              We've built a reputation on going the extra mile for our patients. For us, it's always about you and treating every patient individually.
            </p>
            <button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-teal-600 hover:to-cyan-600 transition-all duration-200 shadow-lg">
              Book Appointment
            </button>
          </div>

          {/* Right Column - Stacking Cards */}
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="sticky top-24 mb-8"
                style={{ zIndex: index + 10 }}
              >
                <div 
                  className="bg-gray-900 border-2 border-cyan-400 rounded-2xl p-8 shadow-2xl hover:shadow-cyan-400/20 transition-all duration-300 max-w-lg mx-auto lg:mx-0"
                  style={{
                    transform: `translateY(${index * 12}px) scale(${1 - index * 0.03})`,
                  }}
                >
                  {/* Stars */}
                  <div className="flex mb-6">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-200 text-lg leading-relaxed mb-8 font-medium">
                    {testimonial.quote}
                  </p>

                  {/* Name */}
                  <div className="text-cyan-400 font-semibold text-lg">
                    {testimonial.name}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Bottom spacer to ensure last card stacks properly */}
            <div className="h-96"></div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer hover:bg-green-600">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default StackingTestimonials;