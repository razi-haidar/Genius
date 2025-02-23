"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials =[
    {
        name: "Razi Haidar",
        avatar: "R",
        title: "CEO",
        description: "This is the best application I've used!"
    },
    {
        name: "Abhijeet Anand",
        avatar: "A",
        title: "CFO",
        description: "This is the best application I've used in my life!"
    },
    {
        name: "Abhishek Kumar",
        avatar: "A",
        title: "Software Engineer",
        description: "Best application I've used!"
    },
    {
        name: "Shivam Kumar",
        avatar: "S",
        title: "UI/UX Developer",
        description: "This is the best application I've used!"
    }
]

export const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">
                Testimonials
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item) => (
                    <Card key={item.description} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}