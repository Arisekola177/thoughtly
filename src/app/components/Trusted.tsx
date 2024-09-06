import Image from 'next/image';
import { companies } from '../constant/data';

const Trusted = () => {
  return (
    <div className="md:mt-20 xs:mt-10 py-16 text-center flex flex-col gap-4">
      {/* Title Section */}
      <div className="bg-white w-40 mx-auto rounded-md py-1 px-2">
        <h3 className="font-medium text-green-500 text-sm">Trusted By</h3>
      </div>

      {/* Slider Section */}
      <div className="mt-6 w-10/12 mx-auto overflow-hidden whitespace-nowrap relative">
        <div className="flex items-center gap-4 animate-slideLeft">
          {companies.map((item:any) => (
            <div key={`first-${item.id}`} className="flex-shrink-0">
              <Image src={item.image} alt={item.image} width={50} height={50} />
            </div>
          ))}

          {companies.map((item:any) => (
            <div key={`second-${item.id}`} className="flex-shrink-0">
              <Image src={item.image} alt={item.image} width={50} height={50} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trusted;
