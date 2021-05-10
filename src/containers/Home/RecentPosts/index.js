import React,{useState} from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPosts
**/

const RecentPosts = (props) => {
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={"https://wallpapercave.com/wp/wp2986324.jpg"} alt=""/>
            </div>

            <div style={{textAlign: 'center'}}>

                <span>Nature</span>
                <h2>Nature is the Art of God</h2>
                <span>posted on May 10, 2021 By Swarnali Bhattacharjee</span>
                <p>There is something wonderful in the beauty of the natural world. Nature’s brilliant glories enchant people and reawaken a special bond that has been established long ago by the creator. I feel a profound connection to nature, which I believe reflects God’s presence in all its majesty and energy. Nature stirs my mind with its mystery and makes me reflect on the power that created it all. It opens me up to the wonders of the world, constantly enlivening and haunting me with its secrets.

When I close my eyes and allow myself to soar across the landscape of my mind, my place of happiness has always been high up on the branch of a tree, away from the business of life and the noise of the city. The pale moon illuminates the black sky and invites the shadows of the trees to engage in a solemn dance. Wisps of snow drift through the air freely. Millions of twinkling stars gaze down upon me. In moments like this, I feel as though I’m a tiny figure beholding an unknown power that lives deep behind the night sky. Even when I’m all alone, I feel like someone outside of my world is watching me. The beauty of what is around me transcends my spirit and gives me a hint of this strange being’s identity. For some reason it is always this image of being alone, being in the immensity of nature, that comes to me as my reserved space for meditation and happiness. Rick Bass, the author of A Texas Childhood, describes how nature brings people happiness. He writes, “It was the woods and the earth – the slope of the hill, the laws of gravity … which seeks joy so earnestly, so relentlessly” (12). Bass realizes that he is not the one causing the joy experienced by himself and his daughter Lowry, but something in his natural surroundings. Nature brings us delight and peacefulness when we reanimate the bond that we share with it.I believe that when God made the earth, he created it to be “good”. This goodness is the source that nourishes us with joy when we relive the connection between ourselves and the natural world. Our struggles and harsh realities are transcended when we open up ourselves to the small and large spectacles of our universe. The physical components that make up nature, every little fiber in a leaf or the fur on an animal, are symbolic to me. It’s truly amazing how these small and seemingly insignificant things can make up such breathtaking creations. I envision each element of creation as a piece of a puzzle. Each piece is magnificent in its own beauty and clicks together with everything else in order to transform into a richly painted canvas. I interpret this completed canvas as a metaphor for the relationship between humans and the natural world. We are meant to interact and collectively join together with nature, and when we immerse ourselves in God’s creation, a delightful masterpiece is born. When we are connected to nature, we are happy and work in harmony with the natural world to create something beautiful.</p>

 

                {/* <button>Read More</button>      */}
               

            </div>
           

            


        </Card>
    </div>
   );

  }

export default RecentPosts