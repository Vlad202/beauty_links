import React from "react";

import OurServices from "../EyebrowsAndEyelashes/OurServices/OurServices";
import EAEHead from "../EyebrowsAndEyelashes/EAEHead/EAEHead";
import HowItWorks from "../Landing/HowItWorks/HowItWorks";
import TextBlocks from "../EyebrowsAndEyelashes/TextBlocks/TextBlocks";
import CommentsSlider from "../EyebrowsAndEyelashes/CommentsSlider/CommentsSlider";

const HairCare = () => {
    const main_header = "Уход за волосами";
    const head_text = `Сегодня как никогда актуален превосходный внешний вид. Для его поддержания требуется регулярный уход за волосами, ведь именно прическа является одним из определяющих факторов внешнего вида.<br>
    Стильная и аккуратная прическа не менее важна, чем красивый наряд и модные аксессуары.<br>
    Однако следовать актуальным тенденциям индустрии моды не всегда просто, поскольку они очень быстро меняются, именно поэтому в этом разделе представлены профессионалы своего дела, которые помогут вам идти в ногу со временем,получая от этого процесса максимум удовольствия!`;
    const slides = [
        {
            "image": "6",
            "header": "Наращивание волос",
            "text": "Увеличение объема и длины волос,возможность кардинального преображения всего за несколько часов"
        },
        {
            "image": "7",
            "header": "Плетение кос и жгутиков",
            "text": "Одной из причесок, над которой не властна мода, является коса. Плетение, выполненное на волосах, способно добавить женственности в любой образ",
        },
        {
            "image": "4",
            "header": "Парикмахера(стрижки и укладки)",
            "text": "Прическа — выражение вашей индивидуальности и внутреннего мира. Правильно подобранная стрижка и укладка являются главными критериями стильного образа."
        },
        {
            "image": "2",
            "header": "Текстурирование Волос(завивка)",
            "text": "Все от мега-фиксации до легкости и воздушности ваших локонов,объем и укладка любой сложности"
        },
        {
            "image": "5",
            "header": "Детский парикмахер",
            "text": "Мастера детских стрижек постараются сделать так, чтобы ваш ребенок не проронил ни слезинки во время стрижки,а получил истинное удовольствие",
        },
        {
            "image": "3",
            "header": "Лечение волос и кожи головы",
            "text": "Устранение выпадения волос и их укрепление,лечение заболеваний кожи головы",
        },
        {
            "image": "1",
            "header": "Окрашивание волос",
            "text": "Здесь представлены опытные мастера-колористы,всё от однотонного окрашивания до балаяжа",
        },
        {
            "image": "8",
            "header": "Дреды",
            "text": "Для желающих ярко самовыражаться",
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

export default HairCare;