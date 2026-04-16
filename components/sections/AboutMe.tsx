import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";

const people = ["AP", "FS", "UI", "DX"];

const stats = [
    { value: "100+", label: "Features Shipped" },
    { value: "40+", label: "Project Upgrades" },
    { value: "4.9+", label: "Client Rating" },
];

export default function AboutMe() {
    return (
        <section id="about" className="relative overflow-hidden bg-black py-12 sm:py-16 lg:py-20">

            <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6">
                <div className="grid min-h-[78vh] items-end gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 xl:min-h-[82vh]">
                    <div className="max-w-2xl pb-2 lg:pb-6">
                        <p className="text-sm font-medium uppercase tracking-[0.35em] text-zinc-400">
                            ABOUT ME
                        </p>

                        <h2 className="mt-5 text-[clamp(2.45rem,6.2vw,3.7rem)] font-semibold leading-[0.96] tracking-[-0.03em] text-zinc-100">
                            <span className="block">I Handle the Design</span>
                            <span className="block">You Focus on What</span>
                            <span className="block text-zinc-500">Matters Most</span>
                        </h2>

                        <p className="mt-7 max-w-[560px] text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
                            Driven by full-stack product thinking, I build polished frontend experiences and scalable backend services that turn complex requirements into reliable, maintainable software.
                        </p>

                        <a
                            href="#contact"
                            className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-lime-300 px-2 py-2 pl-5 text-sm font-semibold text-zinc-900 shadow-[0_10px_24px_rgba(167,243,83,0.25)] transition hover:bg-lime-200"
                        >
                            <span>Connect</span>
                            <span className="grid size-7 place-items-center rounded-lg bg-zinc-900 text-lime-200">
                                <ArrowUpRight className="size-4" aria-hidden="true" />
                            </span>
                        </a>

                        <div className="mt-9">
                            <div className="flex items-center">
                                {people.map((initials, index) => (
                                    <div
                                        key={initials}
                                        className="-ml-2 first:ml-0 flex size-11 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-[10px] font-semibold text-zinc-200 shadow-[0_5px_18px_rgba(0,0,0,0.4)]"
                                        style={{ zIndex: people.length - index }}
                                    >
                                        {initials}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4 flex items-center gap-1 text-lime-300">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <Star key={index} className="size-4 fill-current" aria-hidden="true" />
                                ))}
                            </div>

                            <p className="mt-2 text-sm text-zinc-400">Over 3K+ Positive Ratings</p>
                        </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-[560px] pb-2 sm:pb-4 lg:pb-16 xl:max-w-[590px]">
                        <div className="relative h-[520px] overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#171a17] sm:h-[590px] lg:h-[640px] xl:h-[660px]">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(186,214,125,0.19),transparent_46%)]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/45 via-transparent to-transparent" />
                            <Image
                                src="/profile.jpg"
                                alt="Al Prince Llavan"
                                width={960}
                                height={1200}
                                priority
                                className="h-full w-full scale-[1.02] object-cover object-[center_10%]"
                                sizes="(max-width: 1024px) 100vw, 560px"
                            />
                        </div>

                        <div className="mt-4 rounded-2xl border border-white/10 bg-zinc-900/95 px-4 py-4 shadow-[0_18px_45px_rgba(0,0,0,0.45)] backdrop-blur sm:px-5 sm:py-5 lg:absolute lg:-bottom-6 lg:left-1/2 lg:mt-0 lg:w-[92%] lg:-translate-x-1/2 xl:-bottom-7">
                            <ul className="grid grid-cols-3 divide-x divide-white/10">
                                {stats.map((item) => (
                                    <li key={item.label} className="px-2 text-center">
                                        <p className="text-xl font-semibold text-white">{item.value}</p>
                                        <p className="mt-1 text-[11px] text-zinc-400 sm:text-sm">{item.label}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}