import { BenefitCard } from "@/components/BenefitCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Wallet, ShieldCheck, Heart, Package, Check, Instagram } from "lucide-react";
import logoKurmanun from "@/assets/logo-kurmanun.png";

const Index = () => {
  const whatsappNumber = "628994656888";

  return (
    <main className="min-h-screen bg-background">
      {/* Container dengan max-width 730px */}
      <div className="w-full max-w-content mx-auto px-golden-lg py-golden-2xl">
        
        {/* Badge Ramadhan */}
        <section className="text-left mb-golden-lg animate-fade-up">
          <span className="inline-block bg-primary/10 text-primary px-golden-md py-golden-xs rounded-full text-sm font-semibold font-body tracking-wide">
            🌙 Spesial Ramadhan
          </span>
        </section>

        {/* Main Headline - Rata Kiri, Kata Sensorik */}
        <section className="text-left mb-golden-xl animate-fade-up">
          <h1 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-foreground leading-tight mb-golden-lg">
            Jangan Sampai Ibadah Lancar Tapi Dapur "Kebakaran" Gara-Gara Salah Strategi Belanja Kurma!
          </h1>
        </section>

        {/* Opening - Paragraf Pendek (max 4 baris) */}
        <section className="text-left mb-golden-xl animate-fade-up-delay-1">
          <p className="text-lg sm:text-xl text-foreground font-body leading-relaxed mb-golden-lg">
            Bentar lagi puasa nih. Pasti dilema kan?
          </p>

          <p className="text-foreground font-body text-base sm:text-lg leading-loose mb-golden-md">
            Di satu sisi pengen banget nyediain <strong className="text-primary">kurma terbaik</strong> buat keluarga.
          </p>
          
          <p className="text-foreground font-body text-base sm:text-lg leading-loose mb-golden-md">
            Biar dapet sunnah-nya.
          </p>

          <p className="text-foreground font-body text-base sm:text-lg leading-loose mb-golden-lg">
            Tapi di sisi lain... kalau harus beli langsung <strong>1 dus besar (10kg)</strong>, waduh!
          </p>

          {/* Problem Statement dengan Kata Sensorik */}
          <div className="bg-secondary/50 rounded-xl p-golden-xl border border-border/30 mb-golden-lg">
            <p className="text-muted-foreground font-body text-base sm:text-lg leading-loose">
              Jatah uang buat beli sirup, daging, dan baju lebaran bisa-bisa kepakai.
            </p>
            <p className="text-muted-foreground font-body text-base sm:text-lg leading-loose mt-golden-sm italic">
              Bikin <strong className="text-foreground">pusing</strong> ngatur duitnya!
            </p>
          </div>
        </section>

        {/* Solution Intro - Spesifik & To The Point */}
        <section className="text-left mb-golden-2xl animate-fade-up-delay-2">
          <p className="text-lg sm:text-xl text-foreground font-body leading-relaxed mb-golden-md">
            Tenang...
          </p>
          <p className="text-lg sm:text-xl text-foreground font-body leading-relaxed mb-golden-lg">
            <strong className="text-primary font-semibold">Kumanun</strong> hadir buat Anda yang cerdas mengatur anggaran rumah tangga.
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
            Kenapa Kumanun jadi solusi pas buat Ramadhan Anda?
          </h2>
        </section>

        {/* Benefits Section - Bullets & Numbering untuk Scannable */}
        <section className="space-y-golden-xl mb-golden-3xl animate-fade-up-delay-3">
          
          {/* Benefit 1 - Dengan Kata Sensorik & Data Spesifik */}
          <div className="text-left">
            <div className="flex items-start gap-golden-md mb-golden-md">
              <div className="bg-primary/10 p-golden-sm rounded-lg shrink-0">
                <Wallet className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
                Sunnah Dapet, Dompet Tetap Awet!
              </h3>
            </div>
            
            <p className="text-foreground font-body text-base sm:text-lg leading-loose mb-golden-md">
              Kenapa harus maksa beli sekardus kalau butuhnya cuma buat seminggu?
            </p>
            
            <p className="text-foreground font-body text-base sm:text-lg leading-loose mb-golden-md">
              Di Kumanun, Anda bisa beli kemasan <strong className="text-primary">"Pas di Kantong"</strong>:
            </p>
            
            {/* Bullet Points - Scannable */}
            <ul className="space-y-golden-sm mb-golden-md">
              <li className="flex items-center gap-golden-sm text-foreground font-body">
                <Check className="w-5 h-5 text-accent shrink-0" />
                <span>250gr — cukup buat 3-4 hari</span>
              </li>
              <li className="flex items-center gap-golden-sm text-foreground font-body">
                <Check className="w-5 h-5 text-accent shrink-0" />
                <span>500gr — pas buat seminggu</span>
              </li>
              <li className="flex items-center gap-golden-sm text-foreground font-body">
                <Check className="w-5 h-5 text-accent shrink-0" />
                <span>1kg — stok nyaman 2 minggu</span>
              </li>
            </ul>
            
            <p className="text-muted-foreground font-body text-base leading-relaxed">
              Sisa uangnya? Buat beli kebutuhan sahur atau kue lebaran nanti.
            </p>
            <p className="text-primary font-body text-base font-semibold mt-golden-xs">
              Ibadah lancar, cashflow aman!
            </p>
          </div>

          {/* Benefit 2 - Kata Sensorik untuk Produk Makanan */}
          <div className="text-left">
            <div className="flex items-start gap-golden-md mb-golden-md">
              <div className="bg-primary/10 p-golden-sm rounded-lg shrink-0">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
                Bukan Kurma "Asal Murah"
              </h3>
            </div>
            
            <p className="text-foreground font-body text-base sm:text-lg leading-loose mb-golden-md">
              Hati-hati, jangan tergiur harga miring...
            </p>
            
            <p className="text-foreground font-body text-base sm:text-lg leading-loose mb-golden-md">
              Dapetnya kurma curah yang udah dipegang-pegang banyak orang.
            </p>
            
            <p className="text-foreground font-body text-base sm:text-lg leading-loose mb-golden-md">
              Kumanun itu <strong className="text-primary">kurma Repack Premium</strong>:
            </p>
            
            {/* Kata Sensorik - Penglihatan, Peraba, Pengecap */}
            <ul className="space-y-golden-sm mb-golden-md">
              <li className="flex items-start gap-golden-sm text-foreground font-body">
                <Check className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span><strong>Bersih</strong> — dikemas higienis, gak disentuh tangan sembarangan</span>
              </li>
              <li className="flex items-start gap-golden-sm text-foreground font-body">
                <Check className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span><strong>Dagingnya tebal</strong> — lumer di mulut, legit manisnya</span>
              </li>
              <li className="flex items-start gap-golden-sm text-foreground font-body">
                <Check className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span><strong>Gak ada biji busuk</strong> — tiap butir dipilih satu per satu</span>
              </li>
            </ul>
            
            <p className="text-primary font-body text-base font-semibold">
              Gramasinya dijamin PAS — Anda bayar apa yang Anda dapat.
            </p>
          </div>

          {/* Benefit 3 - Kata Sensorik untuk Emosi */}
          <div className="text-left">
            <div className="flex items-start gap-golden-md mb-golden-md">
              <div className="bg-primary/10 p-golden-sm rounded-lg shrink-0">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
                Ramadhan Jadi Lebih Tenang
              </h3>
            </div>
            
            <p className="text-foreground font-body text-base sm:text-lg leading-loose mb-golden-md">
              Bayangin rasanya pas buka puasa nanti...
            </p>
            
            {/* Kata Sensorik - Visualisasi */}
            <div className="bg-secondary/30 rounded-lg p-golden-lg border-l-4 border-primary mb-golden-md">
              <p className="text-foreground font-body text-base sm:text-lg leading-loose mb-golden-sm">
                Di meja makan ada kurma <strong>legit yang lumer di mulut</strong>...
              </p>
              <p className="text-foreground font-body text-base sm:text-lg leading-loose">
                Di dompet masih ada <strong>uang sisa belanja</strong>.
              </p>
            </div>
            
            <p className="text-foreground font-body text-lg sm:text-xl leading-loose">
              Rasanya? <strong className="text-primary">Ploooong banget!</strong>
            </p>
            
            <p className="text-muted-foreground font-body text-base leading-relaxed mt-golden-sm">
              Gak ada lagi drama ributin uang belanja yang bobol cuma gara-gara stok takjil.
            </p>
          </div>
        </section>

        {/* CTA Section - Scannable dengan Bullets */}
        <section className="text-left mb-golden-3xl">
          <div className="bg-gradient-to-b from-primary/5 to-primary/10 rounded-2xl p-golden-xl sm:p-golden-2xl border border-primary/20">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-golden-md">
              Yuk, jadi Muslim yang bijak!
            </h2>
            
            <p className="text-foreground font-body text-base sm:text-lg leading-relaxed mb-golden-lg">
              Amankan stok kurma Anda sekarang di Kumanun.
            </p>
            
            <p className="text-foreground font-body text-base sm:text-lg leading-relaxed mb-golden-md">
              Pilih ukuran sesuai kebutuhan:
            </p>
            
            {/* Package Options - Bullets Scannable */}
            <div className="flex flex-wrap gap-golden-sm mb-golden-xl">
              <span className="bg-secondary text-secondary-foreground px-golden-md py-golden-sm rounded-lg text-base font-medium font-body inline-flex items-center gap-golden-xs">
                <Package className="w-4 h-4" /> 250gr
              </span>
              <span className="bg-secondary text-secondary-foreground px-golden-md py-golden-sm rounded-lg text-base font-medium font-body inline-flex items-center gap-golden-xs">
                <Package className="w-4 h-4" /> 500gr
              </span>
              <span className="bg-secondary text-secondary-foreground px-golden-md py-golden-sm rounded-lg text-base font-medium font-body inline-flex items-center gap-golden-xs">
                <Package className="w-4 h-4" /> 1kg
              </span>
            </div>

            <p className="text-muted-foreground font-body text-base mb-golden-lg">
              Bayar sesuai yang Anda mampu. Gak perlu bobol budget!
            </p>

            <WhatsAppButton 
              phoneNumber={whatsappNumber}
              message="Halo Kumanun! Saya mau pesan kurma untuk Ramadhan. Bisa info harga dan cara ordernya?"
              size="xl"
              className="w-full sm:w-auto"
            >
              Pesan Sekarang via WhatsApp
            </WhatsAppButton>
          </div>
        </section>

        {/* Footer/Tagline - Rata Tengah dengan Logo & Instagram */}
        <footer className="text-center pb-golden-xl">
          <div className="flex flex-col items-center gap-golden-md">
            {/* Logo */}
            <img 
              src={logoKurmanun} 
              alt="Logo Kumanun" 
              className="w-12 h-12 object-contain"
            />
            
            {/* Brand Name & Tagline */}
            <div>
              <p className="font-display text-xl sm:text-2xl font-semibold text-primary mb-golden-xs">
                Kumanun
              </p>
              <p className="text-muted-foreground font-body text-sm tracking-wide">
                Selalu Pas, Selalu Puas.
              </p>
            </div>
            
            {/* Instagram Link */}
            <a 
              href="https://instagram.com/kurmanun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-golden-xs text-muted-foreground hover:text-primary transition-colors duration-200 font-body text-sm"
            >
              <Instagram className="w-5 h-5" />
              <span>@kurmanun</span>
            </a>
          </div>
        </footer>

      </div>
    </main>
  );
};

export default Index;
