import React from "react";

import OurServices from "../EyebrowsAndEyelashes/OurServices/OurServices";
import EAEHead from "../EyebrowsAndEyelashes/EAEHead/EAEHead";
import HowItWorks from "../Landing/HowItWorks/HowItWorks";
import TextBlocks from "../EyebrowsAndEyelashes/TextBlocks/TextBlocks";
import CommentsSlider from "../EyebrowsAndEyelashes/CommentsSlider/CommentsSlider";

const BodyCare = () => {
    const main_header = "Уход за телом";
    const head_text = `Помимо эстетической красоты и восторженных взглядов противоположного пола, ваша кожа - важный орган отвечающий за ваше самочувствие, здоровье и настроение.<br>
    Стройное подтянутое тело со здоровой кожей всегда будет привлекать внимание и делать человека уверенным.<br>
    В этом разделе представлены специалисты, которые не просто позаботятся о вашем здоровье, но и поднимут настроение и уверенность в себе!`;
    const slides = [
        {
            "image": "40",
            "header": "Скрабирование и Пилинг Тела",
            "text": "Повышение эластичности и упругости кожи,придание ей бархатистости и мягкости"
        },
        {
            "image": "222",
            "header": "Кавитация",
            "text": "Легкое и безболезненное избавление от жировых отложений без каких-либо операций"
        },
        {
            "image": "38",
            "header": "Обертывание",
            "text": "Ускорение кровообращения, выведение шлаков и токсинов из организма, отличная помощь при похудении"
        },
        {
            "image": "41",
            "header": "Мезотерапия",
            "text": "Эффективное омоложение кожи"
        },
        {
            "image": "37",
            "header": "Массаж",
            "text": "От лечебного и оздоровительного до расслабляющего и общего"
        },
        {
            "image": "333",
            "header": "Интимная Косметология",
            "text": "Специалисты интимной косметологии работают над эстетическим видом интимной зоны"
        },
        {
            "image": "39",
            "header": "Бани, Сауны (Водные Процедуры)",
            "text": "Энергетическая и физическая “перезагрузка” организма"
        },
        {
            "image": "41",
            "header": "Карбокситерапия",
            "text": "Лечение возрастных изменений структуры кожи путём воздействия углекислым газом"
        },
        {
            "image": "43",
            "header": "Миостимуляция Тела",
            "text": "Избавление от лишнего жира и целлюлита, улучшение состояния и внешнего вида кожи в короткие сроки"
        },
        {
            "image": "47",
            "header": "Аппаратная Косметология",
            "text": "Омоложение, коррекция силуэта, избавление от растяжек, целлюлита или шрамов, возрастных проблем кожи лица."
        },
        {
            "image": "49",
            "header": "Плацентотерапия",
            "text": "Разглаживание морщин, замедление процессов старения,проявление эффекта лифтинга."
        },
        {
            "image": "50",
            "header": "SPA-процедуры",
            "text": "Снятие стресса и напряжения. Как насчет того, чтобы попасть на “седьмое небо от счастья” ?"
        },
        {
            "image": "48",
            "header": "Комплексный Уход за Телом",
            "text": "Отличная возможность за 1 поход совместить приятное с полезным"
        },
        {
            "image": "46",
            "header": "Инъекционное Похудение",
            "text": "Уменьшение жировых отложений; форма и контуры тела приближаются к идеалу"
        },
        {
            "image": "44",
            "header": "RF-лифтинг (радиочастотный лифтинг)",
            "text": "Разглаживание морщин, подтягивание овала лица и повышение эластичности кожи"
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

export default BodyCare;