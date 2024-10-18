interface Props {
  content: any;
}
const Hero = ({ content }: Props) => {
  return (
    <div className='flex py-5 justify-center items-center bg-black text-white'>
      <div className='flex flex-col gap-2 items-start w-10/12'>
        <h3 className='text-4xl'>{content.title_text}</h3>
        <p className='w-[30rem]'>{content.description_text}</p>
      </div>
    </div>
  );
};

export default Hero;
