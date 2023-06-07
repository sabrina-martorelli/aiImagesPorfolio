
import MainImage from "../components/MainImage";
import MainText from "../components/MainText";

const Landing = () => {
    const urls = [
        'https://cdn.pixabay.com/photo/2023/03/06/11/39/ai-generated-7833307_960_720.jpg',
        'https://cdn.pixabay.com/photo/2022/11/23/22/27/man-7613011_1280.jpg',
        'https://miro.medium.com/v2/resize:fit:720/format:webp/1*jbvqG9vT9ishTLzl_CVbiw.jpeg',
        'https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2022/12/21/e9cb4da8-8867-447b-910e-3fd9cafb9516_8c570677.jpg?itok=WizBCCZy&v=1671560574',
        'https://storage.googleapis.com/cdn.openart.ai/presets/cover_image20_4_edited.jpeg',
        'https://www.analyticsinsight.net/wp-content/uploads/2023/04/8-FREE-NSFW-AI-Art-Generators-to-Create-Images-from-Text.jpg',
      ];
    
 
      return (
    
        <>
       
          <MainImage imageList={urls} />
          <MainText/>
        </>
      );
    
}
 
export default Landing;


