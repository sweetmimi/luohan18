export const mydata = {
    tabs: [{
        label: "Home",
        link: "home",
    },
    {
        label: "Deskripsi Produk",
        link: "product",
    },
    {
        label: "Tentang Kami",
        link: "about",
    },
    {
        label: "Event",
        link: "event",
    },
    {
        label: "Bantuan",
        link: "help",
    },
    ],
    phonelists: [{
        icon: require("@/assets/img/1.png"),
        text: '1.Pengajuan'
    },
    {
        icon: require("@/assets/img/2.png"),
        text: '2.Isi informasi pribadi'
    },
    {
        icon: require("@/assets/img/3.png"),
        text: '3. Pinjaman disetujui'
    },
    {
        icon: require("@/assets/img/4.png"),
        text: '4.Pembayaran tepat waktu'
    }
    ],
    cardItem: [{
        rp: "RP",
        number: "14.997.922.000",
        p: "Total pinjaman sejak didirikan",
        pic: require("@/assets/img/card1.png"),
    },
    {
        rp: "RP",
        number: "14.645.922.000",
        p: "Total Pinjaman Tahun Berjalan",
        pic: require("@/assets/img/card5.png"),
    },
    {
        rp: "RP",
        number: "4.756.336.000",
        p: "Total Outstanding Pinjaman ",
        pic: require("@/assets/img/card2.png"),
    },
    {
        rp: "",
        number: "98.964",
        p: "Jumlah Akumulasi Borrower ",
        pic: require("@/assets/img/card3.png"),
    },
    {
        rp: "",
        number: "	9.589",
        p: "Jumlah Borrower Aktif",
        pic: require("@/assets/img/card4.png"),
    },

    ],
    KomentarItem: [{
        name: "Hafiludin Amrulloh ",

        text: "Mudah, ga ribet.. Mudah2gan limit naik kedepannya.. .. Thanks..UATAS....Cair oke..",
        logo: require("@/assets/img/h.png"),
        star1: require("@/assets/img/star1.png"),
        star2: require("@/assets/img/star2.png"),
    },
    {
        name: "Manin Nin ",
        text: "Proses nya cepat, bunga ringan, tenor lumayan krn sudah terdaftar di ojk",
        logo: require("@/assets/img/m.png"),
        star1: require("@/assets/img/star1.png"),
        star2: require("@/assets/img/star2.png"),
    },
    {
        name: "Aditya Adhit ",
        text: "Aplikasi sangat membantu sekali d saat lagi butuh dana. Tenornya jga 28 hari... Pelayanan csx jga sangat ramah. Pokokx mantul banget deh aplikasi uatas",
        logo: require("@/assets/img/a.png"),
        star1: require("@/assets/img/star1.png"),
        star2: require("@/assets/img/star2.png"),
    },
    ],
      productdata1: [{
            id: 1,
            title: "Pinjaman Pribadi",
            rp: "1.500.000",
            midl: {
              name: "Jangka Waktu Pinjaman",
              money: "28 hari",
            },
            ul: [{
                li: 1,
                name: "Nominal Pinjaman",
                key: "RP 1.500.000",
              },
              {
                li: 2,
                name: "Dana Diterima ",
                key: "RP 1.284.247",
              },
              {
                li: 3,
                name: "Biaya Harian (%)",
                key: " 0,6%",
              },
            ],
          },
          {
            id: 2,
            title: "Pinjaman Usaha",
            rp: "3.000.000",
            midl: {
              name: "Jangka Waktu Pinjaman",
              money: "60 hari",
            },
            ul: [{
                li: 1,
                name: "Nominal Pinjaman",
                key: "RP 3.000.000",
              },
              {
                li: 2,
                name: "Dana Diterima ",
                key: "RP 2.205.882",
              },
              {
                li: 3,
                name: "Biaya Harian (%)",
                key: " 0,6%",
              },
            ],
          },
        ],
        productdata2: [{
            id: 1,
            number: "Cepat",
            p: "Proses registrasi, pencairan dana semua proses serba cepat",
            pic: require("@/assets/img/rocket.png"),
          },
          {
            id: 2,
            number: "Praktis",
            p: "Hanya dengan mengisi data diri, foto KTP dan beberapa data pendukung, ga pakai ribet",
            pic: require("@/assets/img/shiyong.png"),
          },
          {
            id: 3,
            number: "Aman",
            p: "Dipastikan seluruh data privasi pengguna aman",
            pic: require("@/assets/img/safe.png"),
          },
        ],
        productdata3: [{
            title: "Batas usia (lebih dari 19)",
            pic: require("@/assets/img/age_19.png"),
          },
          {
            title: "Memiliki penghasilan yang stabil",
            pic: require("@/assets/img/shouru.png"),
          },
          {
            title: "KTP",
            pic: require("@/assets/img/KTP.png")
          },
        ],
        productdata4: [{
            title: "Batas usia (lebih dari 19)",
            pic: require("@/assets/img/age_19.png"),
          },
          {
            title: "Memiliki penghasilan yang stabil",
            pic: require("@/assets/img/shouru.png"),
          },
          {
            title: "KTP",
            pic: require("@/assets/img/KTP.png")
          },
          {
            title: "Informasi tentang Usaha",
            pic: require("@/assets/img/zizhi.png"),
          },
        ],
    company: [
        "Profil Perusahaan",
        "PT. Plus Ultra Abadi adalah perusahaan jasa keuangan pinjam meminjam uang berbasis teknologi yang mudah, aman, nyaman dan terpercaya. Platform ini dinamai Uatas.",
        "Uatas merupakan platform peer-to-peer (P2P) lending yang menjembatani antara pemberi pinjaman dan peminjam, baik pinjaman personal maupun pinjaman usaha kepada seluruh konsumen di Indonesia. Uatas mendukung pengembangan wirausahawan perempuan dengan menawarkan solusi kepada perempuan di Indonesia.",
        "Uatas memiliki visi menjadi perusahaan teknologi finansial yang memiliki reputasi dengan memberikan layanan terbaik kepada pelanggan, bersahabat dan terpercaya, dengan membantu lebih banyak wanita untuk mengejar mimpi, mengembangkan kemampuan dan berkontribusi kepada keluarga.",
        "Teknologi layanan Uatas dibangun dengan teknologi mutakhir dengan implementasi Artificial Intelligence, Machine Learning, dan Big Data Analytics.Kami juga bekerjasama dengan para stake holder di dunia industri keuangan maupun teknologi dalam rangka meningkatkan kualitas layanan kami, sehingga kami dapat terus berkembang dan melayani masyarakat. "
    ],
    director: {
        title: 'Latar Belakang Dewan Direksi dan Komisaris',
        data: [{
            id: 1,
            pic: require("@/assets/img/women.png"),
            text: "Wiwit Ardiyanti merupakan Direktur sekaligus pemegang saham di UATAS. Wanita kelahiran Surakarta Jawa tengah ini adalah seorang pebisnis di beberapa bidang usaha Jasa dan perdagangan. Dirinya tercatat sebagai mahasiswi di Fakultas Ilmu Komunikasi, Universitas Kristen Indonesia, Akademi Bahasa Asing Jurusan Bahasa Inggris, Fakultas Ekonomi Universitas Mercu Buana dan Fakultas Hukum Universitas Esa Unggul. Beliau berpengalaman di berbagai perusahaan besar di Indonesia seperti PT Agro Bintang (Bintang Raya Corp), PT Curah Niaga Int'l, PT Interteknis Surya Terang (CSI Group)."
        },
        {
            id: 2,
            pic: require("@/assets/img/man1.png"),
            text: "Taufiq Budiman merupakan Direktur Utama dari UATAS. Beliau mengawali karirnya sejak 2011 dan memiliki pengalaman lebih dari 9 tahun di bidang Perbankan untuk berbagai Bank seperti Citibank, OCBC NISP, Permata Bank, Beliau juga pernah menjabat sebagai Financial Planning Specialist at Great Eastern Life Indonesia. Dengan kemampuan dan pengalaman beliau diindustri perbankan dan keuangan diharapkan dapat mengembangkan UATAS menjadi solusi keuangan dan memiliki peran penting terhadap peningkatan pendapatan di masyarakat Indonesia."
        },
        {
            id: 3,
            pic: require("@/assets/img/man2.png"),
            text: "Steven Adidarma merupakan Komisaris sekaligus pemegang saham di UATAS. Dirinya mendapatkan gelar sarjana Hukum Tata Negara di Universitas Katolik Parahyangan dan gelar magister Kenotarisan, Hukum Perdata di Universitas Pelita Harapan yang telah berpengalaman diberbagai perusahaan besar seperti PT. Ken Kem Indonesia diharapkan pengetahuannya tentang dunia Hukum bisa memberikan peranan penting bagi UATAS dalam menggerakkan roda perusahaan."
        }
        ]
    }

}
