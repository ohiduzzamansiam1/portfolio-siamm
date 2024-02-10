"use client";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

const reviewsData = [
  {
    avatar: "/reviews/avatar-2.png",
    name: "Emily Smith",
    job: "Marketing Manager",
    review:
      "Exemplary web & app development. Their UI/UX design elevated our brand's online presence.",
  },
  {
    avatar: "/reviews/avatar-1.png",
    name: "James Johnson",
    job: "Software Engineer",
    review:
      "Exceptional coding, exceeded expectations. Highly recommend their development services.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Mark Williams",
    job: "Graphic Designer",
    review:
      "Stunning UI/UX design. Their creativity and attention to detail impressed.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "Olivia Davis",
    job: "Project Manager",
    review:
      "Smooth process, on-time delivery. Professionalism in web & app development.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Michael Williams",
    job: "Entrepreneur",
    review:
      "Transformative development, tailored to my business. Exceeded expectations, highly satisfied.",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Benjamin Wilson",
    job: "Product Manager",
    review:
      "Top-notch development, beautiful products. Expertise in web & app development evident.",
  },
];

function Reviews() {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviewsData.map((person, idx) => (
            <SwiperSlide key={idx}>
              <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                <CardHeader className="p-0 mb-10">
                  <div className="flex items-center gap-x-4">
                    {/* avatar */}
                    <Image
                      src={person.avatar}
                      alt=""
                      width={70}
                      height={70}
                      priority
                    />
                    {/* Person Details */}
                    <div className="flex flex-col">
                      <CardTitle>{person.name}</CardTitle>
                      <p>{person.job}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardDescription className="text-lg text-muted-foreground">
                  {person.review}
                </CardDescription>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Reviews;
