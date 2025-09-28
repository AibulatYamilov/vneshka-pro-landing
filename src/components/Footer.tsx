const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-background border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              ВнешкаПРО
            </span>
          </h3>
          <p className="text-muted-foreground mb-6">
            Аналитика внешней рекламы для селлеров маркетплейсов
          </p>
          <a
            href="https://t.me/your_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-secondary text-secondary-foreground rounded-xl hover:shadow-glow transition-all duration-300 hover:scale-105 font-semibold"
          >
            <span className="text-xl">📱</span>
            Свяжись с нами в Telegram
          </a>
        </div>
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2024 ВнешкаПРО. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;