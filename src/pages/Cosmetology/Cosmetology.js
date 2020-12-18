import React from "react";

import OurServices from "../EyebrowsAndEyelashes/OurServices/OurServices";
import EAEHead from "../EyebrowsAndEyelashes/EAEHead/EAEHead";
import HowItWorks from "../Landing/HowItWorks/HowItWorks";
import TextBlocks from "../EyebrowsAndEyelashes/TextBlocks/TextBlocks";
import CommentsSlider from "../EyebrowsAndEyelashes/CommentsSlider/CommentsSlider";

const Cosmetology = () => {
    const main_header = "Косметология";
    const head_text = "Косметология поможет вам устранить любые проблемы кожи лица и тела, чтобы всегда чувствовали себя молодыми, ухоженными и прекрасными. Выбирайте мастера, который поможет Вам приблизиться к идеальному образу!";
    const slides = [
        {
            "image": "17",
            "header": "Эстетическая косметология",
            "text": "Это комплекс процедур, которые помогут Вам с очищением, восстановлением, омоложением и профилактикой возрастных изменений кожи. Наши косметологи позаботятся о том, чтобы сохранить здоровое сияние вашей кожи как можно дольше!"
        },
        {
            "image": "19",
            "header": "Аппаратная косметология",
            "text": "Современные методики физиотерапевтического воздействия — это не только уход, но и восстановление, омоложение и лечение для Вашей кожи. Особую эффективность аппаратная косметология показывает в anti-age программах!"
        },
        {
            "image": "18",
            "header": "Инъекционная косметология",
            "text": "Возможность омолодить свое лицо без посещения пластического хирурга. С помощью этих процедур мы избавимся от морщин, восстановим контур лица, нормализуем кровообращение  и справимся с самыми распространенными дефектами лица."
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

export default Cosmetology;