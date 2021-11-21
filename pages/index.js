import Head from "next/head";
import FollowerCard from "../components/FollowerCard";
import Header from "../components/Header";
import StatsCard from "../components/StatsCard";

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <>
                <Header />

                <main className="centwidth -mt-12 lg:-mt-32">
                    <section className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
                        <FollowerCard
                            social="fb"
                            icon="/images/icon-facebook.svg"
                            username="@nathanf"
                            followers={1987}
                            today={{ type: "up", value: 12 }}
                        />
                        <FollowerCard
                            username="@nathanf"
                            social="twitter"
                            icon="/images/icon-twitter.svg"
                            followers={1044}
                            today={{ type: "up", value: 99 }}
                        />
                        <FollowerCard
                            username="@realnathanf"
                            social="insta"
                            icon="/images/icon-instagram.svg"
                            followers="11k"
                            today={{ type: "up", value: 1099 }}
                        />
                        <FollowerCard
                            username="@Nathan F."
                            social="yt"
                            icon="/images/icon-youtube.svg"
                            followers={8239}
                            today={{ type: "down", value: 144 }}
                        />
                    </section>

                    <h1 className="text-xl font-bold dark:text-white text-dark-grayish-blue mt-10 ">
                        Overview - Today
                    </h1>

                    <section className="my-6 grid gap-4 lg:gap-6 lg:grid-cols-2 xl:grid-cols-4">
                        <StatsCard
                            item="Page Views"
                            value={87}
                            icon="/images/icon-facebook.svg"
                            today={{ type: "up", value: "3%" }}
                        />
                        <StatsCard
                            item="Likes"
                            value={52}
                            icon="/images/icon-facebook.svg"
                            today={{ type: "down", value: "2%" }}
                        />
                        <StatsCard
                            item="Likes"
                            value={5462}
                            icon="/images/icon-instagram.svg"
                            today={{ type: "up", value: "2257%" }}
                        />
                        <StatsCard
                            item="Profile Views"
                            value={"52k"}
                            icon="/images/icon-instagram.svg"
                            today={{ type: "up", value: "1375%" }}
                        />
                        <StatsCard
                            item="Retweets"
                            value={117}
                            icon="/images/icon-twitter.svg"
                            today={{ type: "up", value: "303%" }}
                        />
                        <StatsCard
                            item="Likes"
                            value={87}
                            icon="/images/icon-twitter.svg"
                            today={{ type: "up", value: "553%" }}
                        />
                        <StatsCard
                            item="Likes"
                            value={107}
                            icon="/images/icon-youtube.svg"
                            today={{ type: "down", value: "19%" }}
                        />
                        <StatsCard
                            item="Total Views"
                            value={1407}
                            icon="/images/icon-youtube.svg"
                            today={{ type: "down", value: "12%" }}
                        />
                    </section>
                </main>

                <footer className="mt-20 lg:mt-36 grid place-items-center h-14 text-gray-500 text-sm">
                    Challenge completed by Rhythm Saha
                </footer>
            </>
        </>
    );
}
