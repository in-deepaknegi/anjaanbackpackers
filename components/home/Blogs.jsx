import React from 'react'
import Image from 'next/image'
import Hero1 from '@/public/hiking/hiking1.WEBP'
import Hero2 from '@/public/hiking/hiking2.WEBP'
import Hero3 from '@/public/hiking/hiking3.WEBP'
import Author1 from '@/public/profile/Profile1.jpg'
import Author2 from '@/public/profile/Profile2.jpg'


const posts = [
    {
        id: 1,
        title: 'Kedarnath Temple',
        href: '/blogs/kedarnath-temple',
        img: Hero3,
        description:
            'Dedicated to Lord Shiva, Kedarnath temple is one of the twelve Jyotirlingas and a Dham among the Chardhaams, standing at an altitude of 3580 m above sea level. Pandavaas established Kedarnath temple in the 8th century at the banks of the Mandakini River',
        date: 'Jan 15, 2024',
        datetime: '2020-03-16',
        category: { title: 'Travel', href: '#' },
        author: {
            name: 'Ananya Krishali',
            href: '#',
            imageUrl: Author2,
        },
    },
    {
        id: 2,
        title: 'Badrinath Temple',
        href: '#',
        img: Hero2,
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Ananya Krishali',
            href: '#',
            imageUrl: Author2,
        },
    },
    {
        id: 3,
        title: 'Improve your customer experience',
        href: '#',
        img: Hero1,
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Cathy Mueller',
            href: '#',
            imageUrl: Author1,
        },
    },
]

const Blogs = () => {
    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Check out our most recent blog posts
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Keep yourself informed about the most recent hiking updates and advice.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col items-start">
                            <div className='relative w-full'>
                                <Image
                                    src={post.img}
                                    alt='post-img'
                                    className='aspect-video w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2]'
                                />
                                <div className='absolute inset-0 rounded-2xl shadow-xl ring-inset ring-gray-100'></div>
                            </div>
                            <div className='mt-10 max-w-xl'>
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime={post.datetime} className="text-gray-500">
                                        {post.date}
                                    </time>
                                    <a
                                        href={post.category.href}
                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                    >
                                        {post.category.title}
                                    </a>
                                </div>
                                <div className="relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <a href={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <Image src={post.author.imageUrl} alt='id-1' className="h-10 w-10 rounded-full object-cover bg-gray-50" />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">
                                            <a href={post.author.href}>
                                                <span className="absolute inset-0" />
                                                {post.author.name}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blogs