import React from "react";

import OurServices from "../EyebrowsAndEyelashes/OurServices/OurServices";
import EAEHead from "../EyebrowsAndEyelashes/EAEHead/EAEHead";
import HowItWorks from "../Landing/HowItWorks/HowItWorks";
import TextBlocks from "../EyebrowsAndEyelashes/TextBlocks/TextBlocks";
import CommentsSlider from "../EyebrowsAndEyelashes/CommentsSlider/CommentsSlider";

const HairDepilation = () => {
    const main_header = "Удаление волос";
    const head_text = `У девушек крайне чувствительная кожа и это знают абсолютно все. Как правило, удаление волос в домашних условиях чревато раздражением кожи,жесткой черной щетиной и очень быстрым ростом новых волос.<br>
    Так сколько же еще можно страдать?<br>
    Все,что нужно сделать,это обратиться к профессионалу и выбрать подходящий способ удаления из нижеперечисленных!`;
    const slides = [
        {
            "image": "",
            "header": "Бикини-дизайн",
            "text": "Комплекс услуг, включающий в себя фигурную стрижку с элементами депиляции, окраску волос, а также украшение прически декоративными элементами."
        },
        {
            "image": "57",
            "header": "Лазерная эпиляция",
            "text": "Безболезненное удаление волос лазером,Вы на несколько лет забудете о постоянном бритье, раздражениях , потерянном времени и вросших волосах"
        },
        {
            "image": "59",
            "header": "Электроэпиляция",
            "text": "Перманентное удаление волос за счёт небольшого разряда электричества"
        },
        {
            "image": "61",
            "header": "Шугаринг",
            "text": "Гипоаллергенный способ депиляции, результат продержится до 3-х недель"
        },
        {
            "image": "60",
            "header": "Фотоэпиляция",
            "text": "Удаление нежелательных волос при помощи узкого спектра световой волны,избавление от растительности длительное время"
        },
        {
            "image": "58",
            "header": "Депиляция нитью (Тридинг)",
            "text": "Корейская процедура удаления лишних волосков с помощью нити"
        },
        {
            "image": "444",
            "header": "Удаление воском",
            "text": "Восковая депиляция - это наилучшая альтернатива классической бритве,до месяца наслаждения бархатистой кожей"
        }
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

export default HairDepilation;