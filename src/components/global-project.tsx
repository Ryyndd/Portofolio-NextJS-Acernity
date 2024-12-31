// src/projectsData.ts

import agropupuk from "@/public/web-agropupuk.png"
import smartUmkm from "@/public/smart_umkm.png"
import marketSpare from "@/public/market-spare.png"
import notes from "@/public/notes-app.png"

export const projects = [
    {
        id: 1,
        title: 'AGROPUPUK | WEBSITE',
        description: 'Agropupuk: Sebuah website yang menyediakan layanan informasi seputar dunia pertanian serta menjadi media bagi para petani untuk mencari dan menemukan pupuk andalan yang berkualitas.',
        tags: ['Laravel', 'Bootstrap'],
        image: {agropupuk},
        link : "https://github.com/Ryyndd/NotesApp"
    },
    {
        id: 2,
        title: 'SMART UMKM | MOBILE',
        description: 'Smart UMKM: Sebuah aplikasi mobile yang terdiri dari dua aplikasi berbeda namun terintegrasi dengan memanfaatkan layanan API. Aplikasi ini dirancang untuk membantu pelaku usaha kecil dan menengah dalam mengelola bisnis mereka secara lebih efisien dan terstruktur.',
        tags: ['Kotlin', 'Laravel'],
        image: {smartUmkm},
        link : "https://github.com/Ryyndd/SMART_UMKM_USER"
    },
    {
        id: 3,
        title: 'MARKET SPARE | DEKSTOP',
        description: 'Market Spare: Sebuah aplikasi desktop yang dikembangkan untuk mendukung pengelolaan data barang spare part, mempermudah proses penjualan, serta menyediakan fitur rekapitulasi transaksi yang lengkap dan terorganisir dengan baik.',
        tags: ['Java'],
        image: {marketSpare},
        link : "https://github.com/Ryyndd/MarketSpare"
    },
    {
        id: 4,
        title: 'NOTES APP | WEBSITE',
        description: 'Notes App: Sebuah aplikasi catatan yang dirancang secara modern dan dapat digunakan secara gratis. Aplikasi ini memungkinkan pengguna untuk mencatat ide, tugas, atau informasi penting dengan mudah dan praktis.',
        tags: ['Laravel', 'React', 'Inertia.Js'],
        image: {notes},
        link : "https://github.com/Ryyndd/NotesApp"
    }
];
