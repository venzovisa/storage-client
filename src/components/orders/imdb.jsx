const movies = [
    {
        id: "rwxtu97fd2cy7bv8q84u9b96yxysdd",
        title: "Mortal Engines",
        genre: "Sci-Fi",
        stock: 0,
        rate: 6
    },
    {
        id: "gatxfbueekmyr8r8pdx3gyh9ku3xec",
        title: "Polar",
        genre: "Action",
        stock: 0,
        rate: 7
    },
    {
        id: "2qg7dqx9sak9x4w2m9xhj2chjmn9us",
        title: "Aquaman",
        genre: "Sci-Fi",
        stock: 0,
        rate: 8
    },
    {
        id: "vkbvxjxrcjq6h7speryff9zch7r7wc",
        title: "Bumblebee",
        genre: "Sci-Fi",
        stock: 0,
        rate: 7
    },
    {
        id: "q95dapxrk82945yxp5mj5wup3jjfsa",
        title: "Deliver us from evil",
        genre: "Horror",
        stock: 0,
        rate: 5
    },
    {
        id: "b53qdqa55p8vpj3km7ep3ghw6djbn4",
        title: "Hunter Killer",
        genre: "Action",
        stock: 0,
        rate: 9
    },
    {
        id: "7etq67n7ex8g3s6v2gk3xq6z27krzr",
        title: "Sinister",
        genre: "Horror",
        stock: 0,
        rate: 4
    },
    {
        id: "jsqtbu97pj6vcgqm4dkfkxhuqqdnum",
        title: "The Vatican Tapes",
        genre: "Horror",
        stock: 0,
        rate: 4
    },
    {
        id: "jfq7pb4dhgx5g5q4tpjxbnvmpe9rqd",
        title: "The Babysitter",
        genre: "Horror",
        stock: 0,
        rate: 5
    },
    {
        id: "atnfj26uqkxxcuy8py72298n5t3vjr",
        title: "The Void",
        genre: "Horror",
        stock: 0,
        rate: 4
    },
    {
        id: "ysfb4we5qsfmgw57jhd6tndv6t4ke5",
        title: "First Man",
        genre: "Adventure",
        stock: 0,
        rate: 8
    },
    {
        id: "yjqb735xvbrxk8uqyu5mtzp7xfna5r",
        title: "Ouija Origin of Evil",
        genre: "Horror",
        stock: 0,
        rate: 3
    },
    {
        id: "z8h4jr7c2jkuged6eua2wv8wqu7jzy",
        title: "The Last Stand",
        genre: "Comedy",
        stock: 0,
        rate: 5
    },
    {
        id: "xg5829gtactydd7y84f7xd4udgqevf",
        title: "Feral",
        genre: "Horror",
        stock: 0,
        rate: 5
    },
    {
        id: "345kfpatgfrndeu8xujj8a3scaey9b",
        title: "Blair Witch",
        genre: "Horror",
        stock: 0,
        rate: 4
    },
    {
        id: "pvuwtsme49fqjdajdk2xgfvd5fz9wj",
        title: "Alpha",
        genre: "Adventure",
        stock: 0,
        rate: 7
    },
    {
        id: "mfjqj2eumkq28qs4h6e4ygf7cz9p3x",
        title: "Johny English Strikes Again",
        genre: "Comedy",
        stock: 0,
        rate: 8
    },
    {
        id: "f4ngtx39nh9crxzsatw2p9b8rtfrj9",
        title: "The Mist",
        genre: "Horror",
        stock: 0,
        rate: 8
    },
    {
        id: "44v2c4cvqxprgs2u2gp6tfz7g9gy3n",
        title: "Kin",
        genre: "Sci-Fi",
        stock: 0,
        rate: 7
    },
    {
        id: "vsmkz64hee24ekcr64cx9apyyc24e5",
        title: "Venom",
        genre: "Action",
        stock: 0,
        rate: 9
    },
    {
        id: "vdcvafywvbm4ewbjsuf2sazzuj9xbb",
        title: "Jurassic World Fallen Kingdom",
        genre: "Adventure",
        stock: 0,
        rate: 8
    },
    {
        id: "2v4bw3cqzsj54vskcqvf2vwry9u9yh",
        title: "Nazi Overlord",
        genre: "Action",
        stock: 0,
        rate: 4
    },
    {
        id: "fav937nk4wgth4dm8fpur6xcxg4n5f",
        title: "Mile 22",
        genre: "Action",
        stock: 0,
        rate: 5
    },
    {
        id: "8vk4vmfb5u77q2qukja72rvbde4vw6",
        title: "Predator",
        genre: "Sci-Fi",
        stock: 0,
        rate: 5
    },
    {
        id: "hvvdkbbu2yew9w53d7cvjvdcqcu7s9",
        title: "The Boy",
        genre: "Horror",
        stock: 0,
        rate: 5
    },
    {
        id: "nfpvb9yapzc37stgy9sru8dk2b24jw",
        title: "Dark Skies",
        genre: "Horror",
        stock: 0,
        rate: 5
    },
    {
        id: "4v5azkfsgcgezjqqc594dkjrny3k68",
        title: "As Above So Below",
        genre: "Horror",
        stock: 0,
        rate: 6
    },
    {
        id: "2sxxxy644sebmfjx4qhsm242pe337u",
        title: "The Damned",
        genre: "Horror",
        stock: 0,
        rate: 5
    },
    {
        id: "7ypfddfrz5tak4eb92dq62j2mdq9gk",
        title: "The Hallow",
        genre: "Horror",
        stock: 0,
        rate: 5
    },
    {
        id: "8j3jh88ctzmm6d4us2832eea5jvx8t",
        title: "The Equalizer 2",
        genre: "Action",
        stock: 0,
        rate: 9
    },
    {
        id: "rr2e2svyf7c9pfdkrwcyvhbfsvcph8",
        title: "Await Further Instructions",
        genre: "Horror",
        stock: 0,
        rate: 4
    },
    {
        id: "8tdz6zkxtzjq69rmgqmvy8d3xbt9g5",
        title: "Slender Man",
        genre: "Horror",
        stock: 0,
        rate: 4
    },
    {
        id: "tf8ehxqfp8cr96nrjrgp6xbzqt4jsa",
        title: "Housebound",
        genre: "Horror",
        stock: 0,
        rate: 3
    },
    {
        id: "hmdex98ejdckesfvw25ask65qse4zm",
        title: "Reprisal",
        genre: "Action",
        stock: 0,
        rate: 6
    },
    {
        id: "apdbv4xxjrucqp9bzuzx4566scvsue",
        title: "The Meg",
        genre: "Action",
        stock: 0,
        rate: 8
    },
    {
        id: "jvwe2re67jhunzmt2h2ybkz9gx3u7k",
        title: "Ant Man and the Wasp",
        genre: "Sci-Fi",
        stock: 0,
        rate: 8
    },
    {
        id: "4uj8a5rxw5uext2sk3khk3nz3ujmx7",
        title: "Hell House",
        genre: "Horror",
        stock: 0,
        rate: 5
    },
    {
        id: "wf9vc7u3fn9y228x373q449crjbjyn",
        title: "Curse of the Nun",
        genre: "Horror",
        stock: 0,
        rate: 3
    },
    {
        id: "fs9cwpjxzrv296xxmg3dy64mv3n84u",
        title: "Doctor Strange",
        genre: "Sci-Fi",
        stock: 0,
        rate: 7
    },
    {
        id: "2ysr9ftrfpbeumbnkyhpxfyt4ahdns",
        title: "Revenge",
        genre: "Action",
        stock: 0,
        rate: 7
    },
    {
        id: "srarx82mw83xntagmkne94fxb3wyeb",
        title: "Bird Box",
        genre: "Horror",
        stock: 0,
        rate: 8
    },
    {
        id: "sx94w3msqq4phxcy3vah3jy9kw7wgz",
        title: "Sicario Day of the Soldado",
        genre: "Action",
        stock: 0,
        rate: 9
    },
    {
        id: "sx94w3msqq5zhxcy3vah3jy9kw7waz",
        title: "See No Evil 2",
        genre: "Horror",
        stock: 0,
        rate: 5
    }
];

export default movies;