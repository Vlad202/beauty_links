import React from "react";

import OurServices from "./OurServices/OurServices";
import EAEHead from "./EAEHead/EAEHead";
import HowItWorks from "../Landing/HowItWorks/HowItWorks";
import TextBlocks from "./TextBlocks/TextBlocks";
import CommentsSlider from "./CommentsSlider/CommentsSlider";

const EyebrowsAndEyelashes = () => {
    const main_header = "Брови и ресницы";
    const head_text = "Красота бровей и ресниц — это очень важно для любой девушки, которая любит выглядеть потрясающе. Эти маленькие детали обязательно дополнят Ваш образ и сделают Вас еще прекраснее.";
    const slides = [
        {
            "image": "36",
            "header": "Уход за ресницами",
            "text": "Здоровые ресницы - красивые ресницы. Об этом знает любая девушка, вне зависимости от типа предпочитаемых ресничек"
        },
        {
            "image": "35",
            "header": "Уход за бровями",
            "text": "“Бровки домиком…” Сделайте ваши брови выразительными и поверьте, Вас будет тяжело не заметить"
        },
    ];
    const blocks = [
        {
            "header": "Как мне найти практикующего?",
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod eget vitae augue fermentum dictum maecenas. Augue quam mi, felis at. Pretium aliquam augue risus, diam. Ultricies quis leo risus, quam in mi. Eu amet viverra odio massa tellus felis enim elementum, odio. Risus, urna, lectus sit volutpat purus sit nibh. Interdum enim malesuada venenatis id. Odio ac eu dolor risus in in orci vulputate sit. Habitant orci nulla tellus in tristique ac arcu accumsan, ipsum. Dui donec accumsan, tellus nulla facilisi sollicitudin adipiscing eu. Quam sit mauris libero tortor pellentesque posuere. Varius lectus risus nisi, dolor. Pretium faucibus arcu netus erat volutpat tempor. Sed vestibulum quis consectetur metus."
        },
        {
          "header": "Как мне найти практикующего?",
          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod eget vitae augue fermentum dictum maecenas. Augue quam mi, felis at. Pretium aliquam augue risus, diam. Ultricies quis leo risus, quam in mi. Eu amet viverra odio massa tellus felis enim elementum, odio. Risus, urna, lectus sit volutpat purus sit nibh. Interdum enim malesuada venenatis id. Odio ac eu dolor risus in in orci vulputate sit. Habitant orci nulla tellus in tristique ac arcu accumsan, ipsum. Dui donec accumsan, tellus nulla facilisi sollicitudin adipiscing eu. Quam sit mauris libero tortor pellentesque posuere. Varius lectus risus nisi, dolor. Pretium faucibus arcu netus erat volutpat tempor. Sed vestibulum quis consectetur metus."
      },
      {
          "header": "Как мне найти практикующего?",
          "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod eget vitae augue fermentum dictum maecenas. Augue quam mi, felis at. Pretium aliquam augue risus, diam. Ultricies quis leo risus, quam in mi. Eu amet viverra odio massa tellus felis enim elementum, odio. Risus, urna, lectus sit volutpat purus sit nibh. Interdum enim malesuada venenatis id. Odio ac eu dolor risus in in orci vulputate sit. Habitant orci nulla tellus in tristique ac arcu accumsan, ipsum. Dui donec accumsan, tellus nulla facilisi sollicitudin adipiscing eu. Quam sit mauris libero tortor pellentesque posuere. Varius lectus risus nisi, dolor. Pretium faucibus arcu netus erat volutpat tempor. Sed vestibulum quis consectetur metus."
      }
    ]
    return (
        <main>
            <EAEHead main_header={main_header} head_text={head_text} />
            <OurServices slides={slides} />
            <HowItWorks />
            <CommentsSlider />
            <TextBlocks blocks={blocks} />
        </main>
    );
};

export default EyebrowsAndEyelashes;