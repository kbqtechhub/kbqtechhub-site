// import DigitalMarketingFaq from '@/components/digital-marketing/DigitalMarketingFaq'
import DigitalMarketingEnrollCta from '@/components/digital-marketing/DigitalMarketingEnrollCta';
import DigitalMarketingHero from '@/components/digital-marketing/DigitalMarketingHero';
import DigitalMarketingProcess from '@/components/digital-marketing/DigitalMarketingProcess';
import DigitalMarketingServices from '@/components/digital-marketing/DigitalMarketingServices';
import DigitalMarketingWhyChooseUs from '@/components/digital-marketing/DigitalMarketingWhyChooseUs';

export default function DigitalMarketingPage() {
  return (
    <section>
      <DigitalMarketingHero />
      <DigitalMarketingServices />
      <DigitalMarketingProcess />
      <DigitalMarketingWhyChooseUs />
      {/* <DigitalMarketingFaq /> */}
      <DigitalMarketingEnrollCta />
    </section>
  );
}
