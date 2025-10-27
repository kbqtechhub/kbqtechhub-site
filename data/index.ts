import {
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaSquareXTwitter,
  FaTelegram,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa6';

const SocialIcons = [
  {
    name: 'Facebook',
    icon: FaFacebook,
    link: 'https://facebook.com',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    link: 'https://instagram.com/kbqtechhub',
  },
  {
    name: 'Snapchat',
    icon: FaSnapchat,
    link: 'https://snapchat.com',
  },
  {
    name: 'Twitter',
    icon: FaSquareXTwitter,
    link: 'https://twitter.com/kbqtechhub',
  },
  {
    name: 'Telegram',
    icon: FaTelegram,
    link: 'https://telegram.com',
  },
  {
    name: 'Tiktok',
    icon: FaTiktok,
    link: 'https://tiktok.com',
  },
  {
    name: 'Youtube',
    icon: FaYoutube,
    link: 'https://youtube.com',
  },
];
const Blogs = [
  {
    _id: '65baf2341c8b2e001e3c9a01',
    title: 'The Rise of Quantum Computing: Shaping the Future of Technology',
    description:
      'As we journey through the 21st century, the relentless pace of technological advancement continues to astound us. One of the most exciting and promising developments in recent years has been the rise of quantum computing.',
    image:
      'https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: false,
    slug: 'rise-of-quantum-computing',
    category: 'Computing',
    content:
      'Quantum computing represents a paradigm shift in how we process information. Unlike classical computers, which rely on bits that can be either 0 or 1, quantum computers use quantum bits (qubits) that can exist in multiple states simultaneously due to the principles of superposition and entanglement. This allows quantum computers to perform complex calculations at speeds unattainable by traditional systems. For example, quantum algorithms like Shor’s algorithm can factorize large numbers exponentially faster than classical algorithms, posing a threat to current cryptographic systems. Similarly, Grover’s algorithm can search unsorted databases quadratically faster, revolutionizing data retrieval. Quantum computing holds immense potential in fields such as drug discovery, where it can simulate molecular interactions with unprecedented accuracy, leading to the development of new medicines. In finance, it can optimize portfolios and model market behaviors in real-time. However, significant challenges remain. Quantum systems are highly sensitive to environmental interference, leading to errors that require sophisticated error correction techniques. Scalability is another hurdle, as maintaining the coherence of qubits becomes increasingly difficult as systems grow. Companies like IBM, Google, and D-Wave are at the forefront of quantum research, with Google achieving "quantum supremacy" in 2019 by performing a calculation in 200 seconds that would take a supercomputer 10,000 years. As quantum computing matures, it will unlock solutions to some of humanity’s most complex problems, from climate modeling to artificial intelligence.',
    author: 'John Doe',
    publishedDate: '2025-02-02',
    readTime: '7 min',
    tags: ['Quantum Computing', 'Technology', 'Future'],
    views: 1023,
    likes: 150,
    comments: [
      {
        user: 'Jane Smith',
        comment: 'Great insights! Quantum computing is truly fascinating.',
        replies: [{ user: 'John Doe', reply: 'Absolutely! The potential is limitless.' }],
      },
    ],
  },
  {
    _id: '65baf2341c8b2e001e3c9a02',
    title: 'Artificial Intelligence in Healthcare: Revolutionizing Patient Care',
    description:
      'The integration of AI in healthcare is transforming how we diagnose, treat, and prevent diseases. From predictive analytics to robotic surgery, discover how AI is saving lives.',
    image:
      'https://images.pexels.com/photos/3825582/pexels-photo-3825582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: true,
    slug: 'ai-in-healthcare',
    category: 'AI & Healthcare',
    content:
      'Artificial Intelligence (AI) is revolutionizing healthcare by enhancing diagnostics, treatment, and patient care. Machine learning algorithms, trained on vast datasets, can analyze medical images with remarkable accuracy, detecting conditions like cancer, cardiovascular diseases, and neurological disorders at early stages. For instance, AI-powered tools can identify tumors in radiology scans faster and more accurately than human radiologists. Predictive analytics is another game-changer, enabling healthcare providers to anticipate patient outcomes and intervene proactively. AI models can predict the likelihood of hospital readmissions, complications, or disease progression, allowing for personalized treatment plans. In surgery, robotic systems powered by AI are performing minimally invasive procedures with precision, reducing recovery times and improving outcomes. AI is also transforming drug discovery by accelerating the identification of potential compounds and predicting their efficacy. Beyond clinical applications, AI is improving operational efficiency in healthcare facilities. Natural Language Processing (NLP) is being used to automate administrative tasks, such as transcribing medical records and processing insurance claims. Virtual health assistants and chatbots are enhancing patient engagement by providing 24/7 support and answering medical queries. Despite its potential, AI in healthcare faces challenges, including data privacy concerns, ethical considerations, and the need for robust regulatory frameworks. Ensuring the transparency and fairness of AI algorithms is critical to gaining trust among healthcare professionals and patients. As AI continues to evolve, it will play an increasingly vital role in delivering high-quality, accessible, and affordable healthcare.',
    author: 'Alice Johnson',
    publishedDate: '2025-02-01',
    readTime: '6 min',
    tags: ['AI', 'Healthcare', 'Innovation'],
    views: 2045,
    likes: 230,
    comments: [
      {
        user: 'Robert Brown',
        comment: 'AI in healthcare is a game changer! Can’t wait to see where it leads.',
        replies: [
          {
            user: 'Alice Johnson',
            reply: 'Same here! The potential for improving patient outcomes is huge.',
          },
          {
            user: 'Stephen Amoah',
            reply: 'Same here! The potential for improving patient outcomes is huge.',
          },
          {
            user: 'Lydia Mensah',
            reply: 'Same here! The potential for improving patient outcomes is huge.',
          },
        ],
      },
    ],
  },
  {
    _id: '65baf2341c8b2e001e3c9a03',
    title: 'Cybersecurity in the Age of Remote Work',
    description:
      'With remote work becoming the new normal, organizations face unprecedented cybersecurity challenges. Learn about the best practices to protect your digital assets.',
    image:
      'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    popular: true,
    slug: 'cybersecurity-remote-work',
    category: 'Cybersecurity',
    content:
      'The shift to remote work has dramatically expanded the attack surface for cybercriminals, making cybersecurity a top priority for organizations worldwide. Employees accessing corporate networks from home often use personal devices and unsecured Wi-Fi connections, creating vulnerabilities that hackers can exploit. Phishing attacks have surged, with cybercriminals crafting sophisticated emails to trick users into revealing sensitive information or downloading malware. Ransomware attacks, where hackers encrypt data and demand payment for its release, have also increased, targeting businesses of all sizes. To combat these threats, organizations must adopt a multi-layered security approach. Virtual Private Networks (VPNs) encrypt internet traffic, ensuring secure communication between remote workers and corporate systems. Endpoint protection solutions safeguard devices from malware and unauthorized access. Multi-factor authentication (MFA) adds an extra layer of security by requiring users to verify their identity through multiple methods. Employee training is crucial to raising awareness about cyber threats and promoting safe online practices. Zero-trust architecture, which assumes no user or device is inherently trustworthy, is gaining traction as a robust security framework. This model requires continuous verification of user identities and device integrity, minimizing the risk of breaches. As remote work becomes a permanent fixture, businesses must invest in advanced cybersecurity measures to protect sensitive data and maintain operational resilience. Collaboration between governments, industries, and cybersecurity experts is essential to stay ahead of evolving threats and ensure a secure digital future.',
    author: 'Michael Lee',
    publishedDate: '2025-01-30',
    readTime: '5 min',
    tags: ['Cybersecurity', 'Remote Work', 'Safety'],
    views: 1750,
    likes: 200,
    comments: [],
  },
  {
    _id: '65baf2341c8b2e001e3c9a04',
    title: 'The Evolution of 5G Technology',
    description:
      'Explore how 5G is revolutionizing connectivity and enabling new possibilities in IoT, autonomous vehicles, and smart cities.',
    image:
      'https://images.pexels.com/photos/2538122/pexels-photo-2538122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'evolution-of-5g',
    category: 'Networking',
    content:
      '5G technology is the fifth generation of wireless communication, offering faster speeds, lower latency, and greater capacity than previous generations. With download speeds up to 10 Gbps and latency as low as 1 millisecond, 5G is transforming how we connect and interact with technology. One of the most significant impacts of 5G is on the Internet of Things (IoT), where billions of devices can communicate seamlessly, enabling smart homes, wearable technology, and industrial automation. Autonomous vehicles rely on 5G for real-time data exchange, enhancing safety and efficiency on the roads. Smart cities leverage 5G to optimize traffic management, energy usage, and public services, improving the quality of life for residents. The healthcare sector is also benefiting from 5G, with telemedicine and remote surgeries becoming more feasible. Despite its potential, the rollout of 5G faces challenges, including the high cost of infrastructure and the need for widespread coverage. Spectrum availability is another concern, as 5G requires a range of frequencies to operate effectively. Governments and telecommunications companies are working together to address these challenges and accelerate the adoption of 5G. As 5G networks expand globally, they will drive innovation across industries, enabling new applications and services that were previously unimaginable. From augmented reality to edge computing, 5G is paving the way for a more connected and intelligent world.',
    author: 'Sarah White',
    publishedDate: '2025-01-28',
    readTime: '6 min',
    tags: ['5G', 'Connectivity', 'Innovation'],
    views: 1389,
    likes: 180,
    comments: [],
  },
  {
    _id: '65baf2341c8b2e001e3c9a05',
    title: 'Blockchain Beyond Cryptocurrency',
    description:
      'Discover how blockchain technology is transforming industries from supply chain management to digital identity verification.',
    image:
      'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    slug: 'blockchain-beyond-crypto',
    category: 'Blockchain',
    content:
      'Blockchain technology, best known for powering cryptocurrencies like Bitcoin, has far-reaching applications beyond digital currencies. At its core, blockchain is a decentralized and immutable ledger that records transactions across a network of computers. This transparency and security make it ideal for supply chain management, where businesses can track products from origin to consumer, ensuring authenticity and reducing fraud. In healthcare, blockchain secures patient records, enabling seamless data sharing between providers while maintaining privacy. Digital identity verification is another promising area, where blockchain can provide secure and tamper-proof identity management, reducing the risk of identity theft. Governments are exploring blockchain for voting systems, enhancing transparency and reducing the potential for fraud. The financial sector is leveraging blockchain for cross-border payments, reducing transaction times and costs. Smart contracts, self-executing agreements with the terms directly written into code, are automating processes in industries like real estate and insurance. Despite its potential, blockchain faces challenges such as scalability, energy consumption, and regulatory uncertainty. As the technology matures, it will continue to disrupt traditional systems, offering innovative solutions to complex problems. From enhancing transparency to enabling trustless transactions, blockchain is reshaping industries and paving the way for a more secure and efficient future.',
    author: 'David Black',
    publishedDate: '2025-01-25',
    readTime: '7 min',
    tags: ['Blockchain', 'Tech', 'Security'],
    views: 1900,
    likes: 220,
    comments: [],
  },
];

const getUniqueCategories = () => {
  const categories = Blogs.map((blog) => blog.category);
  return ['All', ...new Set(categories)];
};

export { SocialIcons, Blogs, getUniqueCategories };
