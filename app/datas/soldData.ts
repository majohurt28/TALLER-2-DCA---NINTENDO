interface Datashape {
    image: string;
    name: string;
    date: string;
    price: string;
    gameConsole: string;
}

const sold: Datashape[] = [{
    image: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.25/c_scale,w_300/ncom/en_US/merchandising/feature-banner/Current%20Events/Hardware/MAR10%20Day/1920x1080_Mario-HW-bundle_FB-v2",
    name: "Metroid Prime Remastered",
    date: "02/08/2023",
    price: "233.600",
    gameConsole: "Nintendo Switch",
},{
    image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000058477/5a8c4e959c97e52641eae49226704522935806a6e52f35ee14da4956bac26e2c",
    name: "WBSC eBASEBALL™: POWER PROS",
    date: "09/03/2023",
    price: "4.499",
    gameConsole: "Nintendo Switch",
},{
    image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58",
    name: "The Legend of Zelda™: Breath of the Wild",
    date: "03/03/2017",
    price: "350.500",
    gameConsole: "Nintendo Switch",
},{
    image: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_656/b_white/f_auto/q_auto/ncom/es_LA/games/switch/i/inside-switch/hero",
    name: "INSIDE",
    date: "30/01/2023",
    price: "47.500",
    gameConsole: "Nintendo Switch",
},
   
]

export default sold;