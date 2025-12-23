import { BenefitCard } from "@/components/BenefitCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Wallet, ShieldCheck, Heart, Package } from "lucide-react";

const Index = () => {
  const whatsappNumber = "628994656888";

  return (
    <main className="min-h-screen bg-background">
      {/* Container dengan max-width 730px */}
      <div className="w-full max-w-content mx-auto px-golden-lg py-golden-2xl">
        
        {/* Hero Section */}
        <section className="text-center mb-golden-3xl animate-fade-up">
          {/* Logo/Brand */}
          <div className="mb-golden-xl">
            <span className="inline-block bg-primary/10 text-primary px-golden-lg py-golden-sm rounded-full text-sm font-semibold font-body tracking-wide">
              🌙 Spesial Ramadhan
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-foreground leading-tight mb-golden-lg text-balance">
            Jangan Sampai Ibadah Lancar Tapi Dapur "Kebakaran" Gara-Gara Salah Strategi Belanja Kurma!
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground font-body leading-relaxed mb-golden-xl">
            Bentar lagi puasa nih. Pasti dilema kan?
          </p>
        </section>

        {/* Problem Section */}
        <section className="mb-golden-3xl animate-fade-up-delay-1">
          <div className="bg-secondary/50 rounded-xl p-golden-xl sm:p-golden-2xl border border-border/30">
            <p className="text-foreground font-body text-base sm:text-lg leading-loose mb-golden-lg">
              Di satu sisi pengen banget nyediain <strong className="text-primary">kurma terbaik</strong> buat keluarga (biar dapet sunnah-nya).
            </p>
            <p className="text-foreground font-body text-base sm:text-lg leading-loose mb-golden-lg">
              Tapi di sisi lain... kalau harus beli langsung <strong>1 dus besar (10kg)</strong>, waduh!
            </p>
            <p className="text-muted-foreground font-body text-base sm:text-lg leading-loose italic">
              Jatah uang buat beli sirup, daging, dan baju lebaran bisa-bisa kepakai. Bikin pusing ngatur duitnya!
            </p>
          </div>
        </section>

        {/* Solution Intro */}
        <section className="text-center mb-golden-2xl animate-fade-up-delay-2">
          <p className="text-lg sm:text-xl text-foreground font-body leading-relaxed mb-golden-md">
            Tenang, <strong className="text-primary font-semibold">Kumanun</strong> hadir buat Anda yang cerdas mengatur anggaran rumah tangga.
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">
            Inilah kenapa Kumanun jadi solusi pas buat Ramadhan Anda:
          </h2>
        </section>

        {/* Benefits Section */}
        <section className="space-y-golden-lg mb-golden-3xl animate-fade-up-delay-3">
          <BenefitCard
            icon={<Wallet className="w-8 h-8" />}
            title="Sunnah Dapet, Dompet Tetap Awet!"
            description="Kenapa harus maksa beli sekardus kalau butuhnya cuma buat seminggu? Di Kumanun, Anda bisa beli kemasan 'Pas di Kantong' (250gr, 500gr, atau 1kg). Sisa uangnya bisa buat beli kebutuhan sahur atau kue lebaran nanti. Ibadah lancar, cashflow aman!"
          />

          <BenefitCard
            icon={<ShieldCheck className="w-8 h-8" />}
            title="Bukan Kurma 'Asal Murah'"
            description="Hati-hati, jangan tergiur harga miring tapi dapetnya kurma curah yang udah dipegang-pegang banyak orang. Kumanun itu kurma Repack Premium. Pasti bersih, dagingnya tebal, dan gak ada biji busuk. Gramasinya pun dijamin PAS, Anda bayar apa yang Anda dapat."
          />

          <BenefitCard
            icon={<Heart className="w-8 h-8" />}
            title="Ramadhan Jadi Lebih Tenang"
            description="Bayangin rasanya pas buka puasa nanti... Di meja makan ada kurma legit yang lumer di mulut, di dompet masih ada uang sisa belanja. Rasanya? Ploooong banget! Gak ada lagi drama ributin uang belanja yang bobol cuma gara-gara stok takjil."
          />
        </section>

        {/* CTA Section */}
        <section className="text-center mb-golden-3xl">
          <div className="bg-gradient-to-b from-primary/5 to-primary/10 rounded-2xl p-golden-xl sm:p-golden-2xl border border-primary/20">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-golden-md">
              Yuk, jadi Muslim yang bijak!
            </h2>
            <p className="text-muted-foreground font-body text-base sm:text-lg leading-relaxed mb-golden-xl max-w-lg mx-auto">
              Amankan stok kurma Anda sekarang di Kumanun. Pilih ukuran yang Anda butuh, bayar sesuai yang Anda mampu.
            </p>
            
            {/* Package Options */}
            <div className="flex flex-wrap justify-center gap-golden-sm mb-golden-xl">
              <span className="bg-secondary text-secondary-foreground px-golden-md py-golden-xs rounded-full text-sm font-medium font-body">
                <Package className="w-4 h-4 inline mr-1" /> 250gr
              </span>
              <span className="bg-secondary text-secondary-foreground px-golden-md py-golden-xs rounded-full text-sm font-medium font-body">
                <Package className="w-4 h-4 inline mr-1" /> 500gr
              </span>
              <span className="bg-secondary text-secondary-foreground px-golden-md py-golden-xs rounded-full text-sm font-medium font-body">
                <Package className="w-4 h-4 inline mr-1" /> 1kg
              </span>
            </div>

            <WhatsAppButton 
              phoneNumber={whatsappNumber}
              message="Halo Kumanun! Saya tertarik mau pesan kurma untuk Ramadhan. Bisa info lebih lanjut?"
              size="xl"
              className="w-full sm:w-auto"
            />
          </div>
        </section>

        {/* Footer/Tagline */}
        <footer className="text-center pb-golden-xl">
          <div className="inline-block">
            <p className="font-display text-xl sm:text-2xl font-semibold text-primary mb-golden-xs">
              Kumanun
            </p>
            <p className="text-muted-foreground font-body text-sm tracking-wide">
              Selalu Pas, Selalu Puas.
            </p>
          </div>
        </footer>

      </div>
    </main>
  );
};

export default Index;
