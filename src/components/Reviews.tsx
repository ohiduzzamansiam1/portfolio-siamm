"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const reviewsData = [
  {
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/8be4479cb17b1a7d485a22a2c1676d4c-1619549194323/f51bb6b1-9b9d-451b-9992-074f59d5240a.jpg",
    name: "ehsanrishat",
    job: "Bangladesh",
    review:
      "Siam did a very good job. Exceptional skills. Made our email design concept for hubspot, come to life with his expert coding.",
  },
  {
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/46e4bae2979b08c33e9729db3b7f751d-1617308559471/846ae0c4-5feb-4f4d-8aee-5b90680f9270.jpg",
    name: "mrcokeleydesign",
    job: "United States",
    review:
      "Siam was very knowledgeable and responsive. The work was delivered on spec and on time. I would highly recommend Siam and his skillset. I will be calling on him again in the not too distant future.",
  },
  {
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/856eafa1fe20e3cdbae7f4e5eaf71091-1575753892334/7bf14787-1d7c-4912-8d6b-a5dff3bfc0d7.JPG",
    name: "ruin26",
    job: "France",
    review:
      "It's not the first time I've called on his services. And I'll definitely do it again. The work was perfect, delivered ahead of schedule and beyond my expectations. I highly recommend.",
  },
  {
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/ea8510a57f0c3ac6e45681fcf1d3f489-1682071111127/2aef8c65-6dad-4325-8bcd-fe9501789f99.png",
    name: "discounttrading",
    job: "Australia",
    review:
      "Siam helped me with some issues I was having in my React app. He was very polite and knowledgeable and we fixed a lot of bugs during our session. I would definitely use his services again and recommend him to others.",
  },
  {
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/143294/original/CarltonCalhoun.png",
    name: "bizarro5",
    job: "United States",
    review:
      "He was amazing. What's even better is the speed with which he delivered the project. It was flawless!",
  },
  {
    avatar:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/profile/photos/35506873/original/13332749_1040867792668400_5287111907197815208_n.jpg",
    name: "rezakh207",
    job: "Canada",
    review: "Very fast and good delivery. coming back for sure",
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
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            disableOnInteraction: false,
          }}
          className="h-[380px]"
        >
          {reviewsData.map((person, idx) => (
            <SwiperSlide key={idx}>
              <Card className="bg-tertiary select-none dark:bg-secondary/40 p-8 min-h-[300px]">
                <CardHeader className="p-0 mb-10">
                  <div className="flex items-center gap-x-4">
                    {/* avatar */}
                    <Avatar>
                      <AvatarImage
                        src={person.avatar}
                        alt={person.name.toUpperCase().slice(0, 2)}
                      />
                      <AvatarFallback>
                        {person.name.toUpperCase().slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
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
