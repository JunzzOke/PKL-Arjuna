const heroes = {
    'Arlott': {
    role: 'Fighter',
    description: 'Arlott merupakan fighter serba bisa dengan kemampuan crowd control yang kuat.',
    skills: [
        { name: 'Dauntless Strike', description: 'Arlott mengayunkan tombaknya ke depan, memberikan 200 (+60% Total Physical Attack) Physical Damage menyebabkan Stun singkat kepada target di area. Target yang terkena bagian jauh dari area efek akan terkena Stun selama 1 detik sebagai gantinya.', image: 'hero/skill1arl.png' },
        { name: 'Vengeance', description: 'Arlott menyerang lawan, memberikan 135 (+60% Total Physical Attack) Physical Damage (Skill ini tidak dapat dihentikan ketika bergerak). Jika target Arlott memiliki Mark, Skill ini memberikan Damage ganda, langsung mereset Cooldown-nya, dan memulihkan (+90% Total Physical Attack) HP Arlott (hanya memulihkan 50% dari jumlah tersebut jika digunakan ke unit non-Hero).', image: 'hero/skill2ar.png' },
        { name: 'Final Slash', description: 'Arlott menebas ke depannya, memberikan 400 (+80% Total Physical Attack) Physical Damage kepada target di dalam area sambil mendorong mereka ke ujung Area Efek dan mengungkap posisi mereka dalam waktu singkat.', image: 'hero/skill3arl.png' },
    ],
    image: 'hero/arlott.png'
    },
    'Lapu-lapu': {
        role: 'Fighter',
        description: 'Lapu-Lapu merupakan fighter kuat dengan damage burst dan kontrol area yang kuat.',
        skills: [
            { name: 'Justice Blades', description: 'Lapu-Lapu melemparkan dua bumerang ke arah yang ditentukan, setiap bumerang memberikan 140 (+50% Total Physical Attack) Physical Damage kepada lawan yang terkena Hit ketika bumerang dilempar ke depan dan kembali. Lawan yang terkena Hit oleh kedua bumerang menerima 50% Damage dari Hit kedua.', image: 'hero/l1.png' },
            { name: 'Jungle Warrior', description: 'Lapu-Lapu melangkah ke arah yang ditentukan, memberikan 100 (+50% Total Physical Attack) Physical Damage kepada lawan di sepanjang jalur.', image: 'hero/l2.png' },
            { name: 'Braves Fighters', description: 'Lapu-Lapu melompat ke lokasi target sambil menggabungkan pedangnya, memberikan 300 (+80% Total Physical Attack) Physical Damage ke lawan di sekitar ketika mendarat dan menyebabkan 60% Slow selama 1 detik. (Skill ini tidak dapat diganggu).', image: 'hero/l3.png' }
        ],
        image: 'hero/lapu.png'
    },
    'Novaria': {
        role: 'Mage',
        description: 'Novaria merupakan mage yang handal dalam memberikan magic damage',
        skills: [
            { name: 'Astral Meteor', description: 'Novaria memanggil Astral Sphere di lokasi target, memberikan 75 (+25% Total Magic Power) Magic Damage secara terus-menerus ke lawan di sekitar. Setelah 2 detik, Astral Sphere akan meledak, memberikan Magic Damage setara dengan 260 (+50% Total Magic Power) + 4% Max HP lawan ke lawan di sekitar, dan meningkatkan efek Slow Astral Sphere menjadi 2.5 kali dari efek Slow awal.', image: 'hero/n1.png' },
            { name: 'Astral Recall', description: 'Novaria memanggil Astral Sphere dari kejauhan dan menariknya ke arahnya. Di waktu yang sama, Novaria memperoleh 20% Movement Speed dan dapat menembus rintangan. Melewati dinding akan meningkatkan bonus Movement Speed hingga 60%. Novaria memanggil Astral Sphere dari kejauhan dan menariknya ke arahnya. Di waktu yang sama, Novaria memperoleh 20% Movement Speed dan dapat menembus rintangan. Melewati dinding akan meningkatkan bonus Movement Speed hingga 60%.', image: 'hero/n2.png' },
            { name: 'Astral Echo', description: 'Novaria menyebarkan Astral Echo ke arah target, menyebabkan 50% Slow secara singkat dan menempelkan Astral Ring ke lawan, meningkatkan Hitbox mereka menjadi 2.5 kali dan mengungkapkan area di sekitar mereka. Efek ini berlangsung selama 5 detik.', image: 'hero/n3.png' }
        ],
        image: 'hero/nova.png'
    },
    'Yuzhong': {
    role: 'Fighter',
    description: 'Yuzhong merupakan hero fighter dengan kemampuan bertahan dan crowd control yang kuat.',
    skills: [
        { name: 'Dragon Tail', description: 'Arlott mengayunkan tombaknya ke depan  menyebabkan Stun singkat kepada target di area. Target yang terkena bagian jauh dari area efek akan terkena Stun selama 1 detik sebagai gantinya.', image: 'hero/y1.png' },
        { name: 'Soul Grip', description: 'Arlott menyerang lawan, Jika target Arlott memiliki mark , Skill ini memberikan Damage ganda, langsung mereset Cooldown-nya, dan memulihkan  HP Arlott (hanya memulihkan 50% dari jumlah tersebut jika digunakan ke unit non-Hero).', image: 'hero/y2.png' },
        { name: 'Furious Dive', description: 'Arlott menebas ke depannya,  kepada target di dalam area sambil mendorong mereka ke ujung Area Efek dan mengungkap posisi mereka dalam waktu singkat.', image: 'hero/y3.png' },
        { name: 'Black Dragon Form', description: 'Arlott menebas ke depannya,  kepada target di dalam area sambil mendorong mereka ke ujung Area Efek dan mengungkap posisi mereka dalam waktu singkat.', image: 'hero/y4.png' },
    ],
    image: 'hero/yz.png'
    },
    'Beatrix': {
    role: 'Marksman',
    description: 'Beatrix adalah penembak jitu serbaguna dengan banyak pilihan senjata.',
    skills: [
        { name: 'Masterful Gunner', description: 'Pasif: Beatrix dapat membawa 2 senjata di saat yang bersamaan, dan meningkatkan Physical Attack-nya sebesar 5. Aktif: Beatrix membutuhkan 0.5 detik untuk mengganti senjata utamanya dengan senjata kedua yang dia simpan di punggungnya, memperoleh cara baru untuk menyerang dan Ultimate.', image: 'hero/b1.png' },
        { name: 'Tactical Reposition', description: 'Beatrix berguling ke depan sambil mengisi ulang senjatanya saat ini.', image: 'hero/b2.png' },
        { name: 'Renner Apathy', description: 'Beatrix membidik lawan dengan Renner. Saat menggunakan Skill ini, dia memberikan 700 (+280% Total Physical Attack) Physical Damage ke lawan pertama yang terkena. Beatrix dapat membidik selama 8 detik, dan dia dapat membatalkannya lebih awal untuk mengurangi 50% Cooldown. Tembakan ini dapat menembus Minion dan hanya memberikan 75% Damage ke unit Non-Hero.', image: 'hero/b3.png' },
        { name: 'Need Backup', description: 'Setelah melarikan diri dari pertarungan selama 3 detik, Beatrix dapat memanggil pelayannya, Morgan, untuk menyediakan persediaan senjata. Beatrix harus memilih dua senjata dari persediaan tersebut sebagai senjata utama dan senjata keduanya. Pemilihan senjata akan terhenti jika dia melakukan aksi apa pun atau terkena Crowd Control selama periode ini.', image: 'hero/b4.png' },
    ],
    image: 'hero/beatrix.png'
    },
    'Claude': {
    role: 'Marksman',
    description: 'Claude merupakan hero Marksman dengan mobilitas dan damage yang tinggi.',
    skills: [
        { name: 'Art Of Thievery', description: 'Claude memancarkan gelombang pengganggu ke arah yang ditentukan, memberikan 160 (+40% Total Physical Attack) Physical Damage ke lawan di area, serta mengurangi 20% Movement Speed dan 10% Attack Speed mereka. Untuk setiap lawan yang terkena, Claude memperoleh 4% Movement Speed & Attack Speed (menjadi dua kali lipat jika mengenai Hero lawan) selama 6 detik (hingga 5 Stack).', image: 'hero/c1.png' },
        { name: 'Battle Mirror Image', description: 'Claude menciptakan bayangan hologram dari Dexter di lokasi target yang menyerang lawan di sekitarnya secara otomatis selama 5.5 detik. Basic Attack dari bayangan hologram memberikan 20 (+30% Total Physical Attack) Physical Damage dan dapat mengaktifkan efek Basic Attack Claude. Gunakan Kembali: Claude bertukar tempat dengan bayangan hologram.', image: 'hero/c2.png' },
        { name: 'Blazing Duet', description: 'Claude dan Dexter menembak lawan di sekitar selama 3 detik, memberikan 130 (+10% Total Physical Attack) Physical Damage ke hingga 2 lawan dengan setiap tembakan (serangan ini dihitung sebagai Basic Attack). Claude juga memperoleh 20 (+3% Total Physical Attack) Shield setiap kali Ultimate memberikan Damage ke lawan.', image: 'hero/c3.png' },
    ],
    image: 'hero/claude.png'
    },
    'Hayabusa': {
    role: 'Assasin',
    description: 'Hayabusa merupakan hero Assassin dengan mobilitas dan damage yang tinggi.',
    skills: [
        { name: 'Ninjutsu: Phantom Shuriken', description: 'Hayabusa melemparkan tiga Shuriken ke arah target, setiap serangan memberikan 220 (+75% Extra Physical Attack) Physical Damage ke lawan yang terkena dan menyebabkan 35% Slow selama 2 detik. Lawan yang terkena Shuriken beberapa kali hanya menerima 70% Damage setelah serangan pertama. Hayabusa memulihkan 10 Energy untuk setiap lawan Non-Minion yang terkena. Pasif: Hayabusa memperoleh 3% Spell Vamp secara permanen.', image: 'hero/h1.png' },
        { name: 'Ninjutsu: Quad Shadow', description: 'Hayabusa bergerak ke arah target dan mengeluarkan bayangan ke empat arah. Bayangan akan menetap atau menempel ke Hero lawan pertama yang terkena, memberikan 130 (+30% Extra Physical Attack) Physical Damage dan menyebabkan 40% Slow selama 2 detik. Hayabusa akan segera berhenti jika dia mengenai lawan saat bergerak. Gunakan Kembali: Hayabusa melakukan teleportasi ke lokasi bayangan dan mengurangi Cooldown Ninjutsu: Phantom Shuriken sebanyak 1 detik. Jika bayangannya menetap pada Hero lawan, dia juga memberikan 130 (+30% Extra Physical Attack) Physical Damage ke lawan.', image: 'hero/h2.png' },
        { name: 'Ougi: Shadow Kill', description: 'Hayabusa menyatu dengan bayangan dan memberikan 6 serangan Single-target ke lawan di dalam area, setiap serangan memberikan 140 (+75% Extra Physical Attack) Physical Damage. Serangan akan memprioritaskan lawan yang memiliki Shadow Mark dan memberikan tambahan 45 (+20% Extra Physical Attack) Physical Damage ketika mengumpulkan Stack. Tetapi tidak memberikan tambahan Shadow Mark.', image: 'hero/h3.png' },
    ],
    image: 'hero/haya.png'
    },
    'Khufra': {
    role: 'Tank',
    description: 'Khufra merupakan hero tank yang terkenal dengan kemampuan crowd control dan inisiasinya.',
    skills: [
        { name: 'Tyrants Revenge', description: 'Khufra menarik perban di lengannya untuk melompat ke arah yang ditentukan, memberikan Physical Damage setara dengan 50 + 7 (+1.5% Extra Physical Attack)% dari Max HP-nya kepada semua lawan yang berada di jalurnya. Ketika melompat ke jarak terjauh atau mengenai Hero lawan pertama, Khufra akan langsung berhenti, memberikan Physical Damage setara dengan 50 + 7 (+1.5% Extra Physical Attack)% dari Max HP-nya kepada lawan di sekitar, serta menyebabkan Airborne kepada mereka selama 1.1 detik.', image: 'hero/k1.png' },
        { name: 'Bouncing Ball', description: 'Khufra menggunakan perban untuk membungkus dirinya menjadi Magic Bouncing Ball, meningkatkan Physical dan Magic Defense-nya sebesar 30%. Lawan yang mencoba menggunakan Skill Blink untuk bergerak melewati Khufra akan terkena Airborne. Setiap kali Magic Bouncing Ball menyentuh tanah, Magic Bouncing Ball akan memberikan Magic Damage setara dengan 50 + 3 (+2% Extra Physical Attack)% dari Max HP-nya dan menyebabkan 80% Slow kepada lawan di sekitar. Berlangsung selama 0.2 detik.', image: 'hero/k2.png' },
        { name: 'Tyrants Rage', description: 'Khufra mendorong semua lawan di sekitarnya ke arah depan, memberikan 300 (+100% Total Physical Attack) Physical Damage dan menyebabkan Slow selama 1.25 detik. Jika lawan yang terkena Skill ini mengenai dinding, mereka akan terkena Physical Damage tambahan setara dengan 150% dari Damage Skill ini, serta tidak lagi terkena Slow, melainkan Stun.', image: 'hero/k3.png' },
    ],
    image: 'hero/khufra.png'
    },
    'Lancelot': {
    role: 'Assasin',
    description: 'Lancelot merupakan Assassin dengan damage burst dan mobilitas yang tinggi.',
    skills: [
        { name: 'Puncture', description: 'Lancelot bergerak ke arah target, memberikan 100 (+50% Total Physical Attack) Physical Damage ke lawan di jalurnya dan meninggalkan Sword Mark ke lawan pertama yang tidak memiliki Mark. Sword Mark berlangsung selama 5 detik. Jika Lancelot berhasil meninggalkan Sword Mark ke lawan, Cooldown Skill ini akan direset.', image: 'hero/ln1.png' },
        { name: 'Thorned Rose', description: 'Lancelot menyerang ke arah target 3 kali, setiap serangan memberikan 170 (+130% Extra Physical Attack) Physical Damage ke lawan yang terkena (Damage berkurang ketika beberapa lawan terkena). Dia tidak dapat ditargetkan dan diserang selama durasi ini. Lawan di tengah area menerima 3 serangan dan terkena 20% Slow selama 0.5 detik. Efek Slow dapat di-Stack.', image: 'hero/ln2.png' },
        { name: 'Phantom Execution', description: 'Setelah jeda singkat, Lancelot melakukan Executioners Strike ke arah target, memberikan 350 (+170% Total Physical Attack) Physical Damage ke lawan yang terkena. Dia menjadi Invincible saat melakukan Executioners Strike.', image: 'hero/ln3.png' },
    ],
    image: 'hero/lance.png'
    },
    'Moskov': {
    role: 'Marksman',
    description: 'Moskov merupakan hero Marksman yang memiliki serangan jarak jauh dan crowd control yang kuat.',
    skills: [
        { name: 'Abbys Walker', description: 'Moskov berpindah ke lokasi target, meningkatkan Attack Speed menjadi 1.15 kali selama 3 detik. Sementara itu, Basic Attack-nya memberikan (+10% Total Physical Attack) Damage tambahan ke lawan di belakang target utama.', image: 'hero/m1.png' },
        { name: 'Spear of Misery', description: 'Moskov mengeluarkan serangan kuat ke arah Hero lawan atau Creep, memberikan 300 (+60% Total Physical Attack) Physical Damage, menyebabkan Knockback, dan mengungkap posisi mereka selama 2 detik. Jika target bertabrakan dengan Hero lawan ketika terkena Knockback, keduanya akan menerima 200 (+30% Total Physical Attack) Physical Damage dan terkena Stun selama 1.2 detik. Jika lawan bertabrakan dengan dinding, mereka akan juga terkena Stun selama durasi yang sama.', image: 'hero/m2.png' },
        { name: 'Spear of Destruction', description: 'Setelah jeda singkat, Moskov melemparkan Spear of Destruction ke arah target, memberikan 340 (+100% Total Physical Attack) Physical Damage ke lawan di jalurnya dan ke lawan pertama yang terkena. Saat mengenai Hero lawan, tombaknya akan menembus mereka, memberikan 10% Physical Damage tambahan ke lawan di belakang. Target dan lawan yang terkena Damage yang menembus akan terkena 50% Slow selama 1 detik (durasi Slow berskala dengan waktu tempuh tombak, hingga 3 detik). Ketika Spear of Destruction mengenai Hero lawan pertama, maka akan menciptakan sebuah bayangan di belakang lawan dan me-Refresh Cooldown Abyss Walker. Gunakan Kembali: Moskov menggunakan Abyss Walker dari lokasi bayangan (Cooldown sama dengan Skill-nya).', image: 'hero/m3.png' },
    ],
    image: 'hero/moskov.png'
    },
};

function selectHero(heroName) {
    const hero = heroes[heroName];
    if (!hero) return;

    // Update selected hero details
    const selectedHeroDiv = document.getElementById('selected-hero');
    selectedHeroDiv.querySelector('.hero-image img').src = hero.image;
    selectedHeroDiv.querySelector('.hero-info h2').textContent = heroName;
    selectedHeroDiv.querySelector('.hero-role').textContent = `Role: ${hero.role}`;
    selectedHeroDiv.querySelector('.hero-description').textContent = hero.description;

    const skillsList = selectedHeroDiv.querySelector('.hero-skills');
    skillsList.innerHTML = hero.skills.map(skill => `
        <li>
            <img src="${skill.image}" alt="${skill.name}">
            <div>
                <strong>${skill.name}:</strong> ${skill.description}
            </div>
        </li>
    `).join('');

    // Show selected hero details and hide the grid
    document.querySelector('.heroes').style.display = 'none';
    selectedHeroDiv.style.display = 'flex';
    document.getElementById('back-button').style.display = 'block';
}

function goBack() {
    // Hide selected hero details and show the grid again
    document.querySelector('.heroes').style.display = 'grid';
    document.getElementById('selected-hero').style.display = 'none';
    document.getElementById('back-button').style.display = 'none';
}