import React from "react";

import OurServices from "../EyebrowsAndEyelashes/OurServices/OurServices";
import EAEHead from "../EyebrowsAndEyelashes/EAEHead/EAEHead";
import HowItWorks from "../Landing/HowItWorks/HowItWorks";
import TextBlocks from "../EyebrowsAndEyelashes/TextBlocks/TextBlocks";
import CommentsSlider from "../EyebrowsAndEyelashes/CommentsSlider/CommentsSlider";

const Makeup = () => {
    const main_header = "Макияж";
    const head_text = `«Не бывает некрасивых женщин. Бывают равнодушные к себе и косметике». Эсти Лаудер <br>
    В своем современном виде, макияж имеет десятки вариаций и предназначений, на каждый случай жизни.<br>
    Подчеркните свою уникальность, используя естественные цвета, чтобы все могли оценить Вашу натуральную красоту. <br>
    Макияж не только для женщин! Важное событие и мужчина хочет выглядеть идеально? Наши специалисты сделают такой макияж, который будет совсем незаметным, но отлично скроет недостатки кожи.
    `;
    const slides = [
        {
            "image": "29",
            "header": "Детский Макияж",
            "text": "Ребёнок - хрупкое создание. Детский макияж — это тонкое дело и оно требует особых навыков. Наши специалисты используют для этого исключительно натуральную косметику, чтобы создать выразительный образ Вашего ребенка. "
        },
        {
            "image": "25",
            "header": "Аэромакияж",
            "text": "Выход для тех, кто устал от обыденного нанесения макияжа, и ищет что-то нового. Он стойкий, и не требует постоянных поправок, но и одновременно не забивает поры, не вызывая раздражения, а самое главное, в разы сокращает затраты Вашего драгоценного времени",
        },
        {
            "image": "21",
            "header": "Вечерний макияж",
            "text": "Впереди вечеринка или корпоратив? Не проблема, сделай себе нужный образ, чтобы быть незабываемой на любом мероприятии"
        },
        {
            "image": "24",
            "header": "Макияж для особых случаев",
            "text": "Подборка мастеров, которые сделают макияж специально для случая, в котором не подойдёт стандартный подход. Произведите фурор, где бы вы ни были"
        },
        {
            "image": "22",
            "header": "Nude-макияж",
            "text": "Подчеркните свою уникальность, используя естественные цвета, дабы Ваша натуральная красота имела чёткие очертания. Макияж является монохромным",
        },
        {
            "image": "26",
            "header": "Свадебный Макияж",
            "text": "Подготовьте себя к одному из самых важных событий в Вашей жизни и оно запомниться в Ваших моментах наилучшим образом",
        },
        {
            "image": "27",
            "header": "МаниЭкспресс-макияжкюр",
            "text": "Для тех, кто действительно спешит, экспресс макияж подойдет идеально. Украсьте свой образ минимумом косметических средств и соответственно минимумом затрат времени. Поспеши! ",
        },
        {
            "image": "30",
            "header": "Аквагрим",
            "text": "Создайте уникальный образ с помощью техники аквагрима. Идеально для карнавала или костюмированной вечеринки",
        },
        {
            "image": "28",
            "header": "Лифтинг-макияж",
            "text": "Создайте эффект омоложения посредством подтягивания контуров лица, визуального удаления морщин и обвислостей",
        },
        {
            "image": "28",
            "header": "Мужской макияж",
            "text": "Думали макияж только для женского пола? Ну уж нет, мужчина тоже может скрыть какие либо увечья, раздражения и покраснения либо просто омолодить своё лицо, в наше время, это вполне нормальное явление.",
        },
        {
            "image": "231",
            "header": "Макияж для Фотосессии",
            "text": "Макияж, который поможет Вам выглядеть на фотосессии максимально фотогенично. Даешь качественную картинку! ",
        },
        {
            "image": "21",
            "header": "Создание Образа",
            "text": "Процесс макияжа по Вашим наработкам с помощью мастера. Воплотите самые смелые идеи",
        },
        {
            "image": "31",
            "header": "Консультация по Макияжу",
            "text": "Проконсультируйтесь с мастером по-поводу наилучшего подбора цветов, тонов и косметики под ваш тип кожи и форму лица. Откройте наиболее соответствующий Вам образ.",
        },
        {
            "image": "21",
            "header": "Коктейльная вечеринка",
            "text": "Апероль, ещё апероль, а какая музыка! Ух, удалась вечеринка! Подготовьтесь к коктейльной вечеринке надлежащим образом.",
        },
        {
            "image": "20",
            "header": "Дневной макияж",
            "text": "Нанесение повседневного легкого макияжа, для работы в офисе, учебы или деловой поездки. Минимализм - залог успеха.",
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

export default Makeup;