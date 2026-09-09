import InfoPage, { generateMetadata as infoMetadata } from "@/components/info-page";
const params = Promise.resolve({ info: "privacy" });
export const generateMetadata = () => infoMetadata({ params });
export default function Page() { return <InfoPage params={params} />; }
