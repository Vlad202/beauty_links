import React from "react";

import OurServices from "../EyebrowsAndEyelashes/OurServices/OurServices";
import EAEHead from "../EyebrowsAndEyelashes/EAEHead/EAEHead";
import HowItWorks from "../Landing/HowItWorks/HowItWorks";
import TextBlocks from "../EyebrowsAndEyelashes/TextBlocks/TextBlocks";
import CommentsSlider from "../EyebrowsAndEyelashes/CommentsSlider/CommentsSlider";

const NailCare = () => {
    const main_header = "Уход за ногтями";
    const head_text = `Ухоженные руки — визитная карточка женщины. <br>
    Красивый маникюр, аккуратные кутикулы и нежная чистая кожа расскажут о своей хозяйке может даже больше, чем она сама.<br>
    Безупречный маникюр, аккуратные ногти – сегодня это необходимые атрибуты красоты и залог успеха, в том числе и в мире бизнеса.<br>
    Уход за ногтями - это не только стрижка ногтей. Это понятие включает в себя услуги по комплексному уходу за руками.<br> 
    Ну и про ваши ножки мы тоже не забыли!`
    const slides = [
        {
            "image": "",
            "header": "Подология",
            "text": "Лечение заболеваний стоп, ногтей и кожи ног"
        },
        {
            "image": "111",
            "header": "Педикюр",
            "text": "Педикюр сохранит красоту ваших ног и поможет избежать различных заболеваний"
        },
        {
            "image": "11",
            "header": "SPA Маникюр и Педикюр",
            "text": "Комплексный уход за руками и ногами"
        },
        {
            "image": "13",
            "header": "Дизайн Ногтей",
            "text": "Превратите ваши руки в настоящее произведение искусства,подчеркните свою индивидуальность и привлеките внимание окружающих к своим рукам"
        },
        {
            "image": "141",
            "header": "Покрытие лаком",
            "text": "Мастера с лёгкостью подберут необходимую форму и длину ногтей под Вас и ваши личные предпочтения, наращивание любого вида"
        },
        {
            "image": "12",
            "header": "Наращивание ногтей",
            "text": "Мастера с лёгкостью подберут необходимую форму и длину ногтей под Вас и ваши личные предпочтения, наращивание любого вида"
        },
        {
            "image": "9",
            "header": "Маникюр",
            "text": "Современные методики физиотерапевтического воздействия — это не только уход, но и восстановление, омоложение и лечение для Вашей кожи. Особую эффективность аппаратная косметология показывает в anti-age программах!"
        },
        {
            "image": "15",
            "header": "Комплексные Услуги по Уходу за Ногтями",
            "text": "Комплексные услуги дают возможность за одну процедуру привести в порядок руки или ноги, или даже всё вместе. Таким образом вы значительно экономите своё время!"
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

export default NailCare;