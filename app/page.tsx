import DjScene from "@/components/DjScene";
import Equalizer from "@/components/Equalizer";
import NeonCard from "@/components/NeonCard";

const highlights = [
  {
    title: "ریتم تپنده",
    description:
      "صداهای الکترونیک با باس عمیق که سالن را به لرزه می‌اندازد و همه را به حرکت وا می‌دارد."
  },
  {
    title: "نورپردازی نئونی",
    description:
      "ترکیبی از نورهای بنفش و فیروزه‌ای با افکت‌های لیزری که فضای رؤیایی می‌سازد."
  },
  {
    title: "اجرای زنده",
    description:
      "دیجی با تمرکز کامل در حال میکس کردن ترک‌هاست و با حرکات دست خود انرژی جمعیت را بالا می‌برد."
  }
];

export default function Page() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero__text">
          <span className="hero__badge">لایو ست</span>
          <h1>یک آقا در حال دیجی کردن</h1>
          <p>
            زیر باران نورهای نئونی، دیجی با هدفون‌های درخشان و پلترهای دیجیتال
            در حال ساختن فضایی هیجان‌انگیز است. تماشاگران با هر ضربه باس به جلو
            می‌پرند و موجی از انرژی در کل سالن جاری می‌شود.
          </p>
          <div className="hero__cta">
            <button className="btn btn--primary">رزرو بلیط</button>
            <button className="btn btn--ghost">مشاهده گالری</button>
          </div>
        </div>
        <DjScene />
      </section>

      <section className="equalizer">
        <Equalizer />
      </section>

      <section className="highlights">
        {highlights.map((item) => (
          <NeonCard key={item.title} title={item.title} description={item.description} />
        ))}
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} ریتم شب | همه حقوق محفوظ است</span>
      </footer>
    </main>
  );
}
