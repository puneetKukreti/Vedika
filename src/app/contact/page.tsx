import dynamic from 'next/dynamic';

    const ContactPage = dynamic(() => import('../components/ContactPageContent'), { ssr: false });

    export default ContactPage;
