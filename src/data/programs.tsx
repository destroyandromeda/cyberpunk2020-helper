export enum ProgramClass {
  penetration = "penetration",
  decryption = "decryption",
  detection = "detection",
  antiSystem = "anti-system",
  protection = "protection",
  antiPrograms = "anti-programs",
  antiPersonnel = "anti-personnel",
  controllers = "controllers",
  utilities = "utilities",
  demon = "demon",
}

export const ProgramClasses = [
  "penetration",
  "decryption",
  "detection",
  "antiSystem",
  "protection",
  "antiPrograms",
  "antiPersonnel",
  "controllers",
  "utilities",
  "demon"
] as const;


export enum ProgramClassNames {
  "penetration" = "Проникновение",
  "decryption" = "Расшифровка",
  "detection" = "Обнаружение / тревога",
  "anti-system" = "Противосистемные",
  "protection" = "Защита",
  "anti-programs" = "Антипрограммы",
  "anti-personnel" = "Программы-киллеры",
  "controllers" = "Контроллеры",
  "utilities" = "Утилиты",
  "demon" = "Демоны",
}

/**
 * ### class
 * #### это тип программы, её функция.
 * Программы Проникновения незаметно пробираются в нужное место,
 *  софт Обнаружения отслеживает что-либо,
 *  анти-программы (Anti-IC programs) атакуют чужие программы,
 *  программы-киллеры (Anti-personnel programs) сражаются против других нетраннеров
 * и так далее.
 *
 * ### power
 * #### мера того, насколько мощна ваша программа в сравнении с остальными.
 *  В бою этот показатель добавляется к очкам атаки нетраннера (точно также, как и Точность Оружия в реальных боях).
 *  Чем выше Сила, тем выше шанс программы выполнить свою задачу.
 *
 * ### memoryUnits
 * #### Единицы Памяти или ЕП отражают размер программы.
 * Каждый слот памяти на кибердеке или полноценном компьютере может содержать 10 ЕП.
 * Нетраннеры сильно ценят свободное "место", ведь оно определяет их арсенал.
 *
 * ### price
 * #### стоимость программы на обычном или чёрном рынке.
 * Всё в будущем имеет свою цену, даже воздух.
 *
 * ### icon
 * #### это то, как программы выглядят в Сети.
 * Внешность своего софта можно изменять, так что не стоит доверять безобидным иконкам.
 */
export type Program = {
  id: number;
  class: ProgramClass;
  power: number;
  memoryUnits: number;
  price: number;
  name: string;
  description: string | React.ReactNode;
  icon: string | React.ReactNode;
};

export type TProgramClassesOption = {
  value: ProgramClass,
  label: ProgramClassNames
}

export type TProgramClassesOptions = TProgramClassesOption[]

export const ProgramClassOptions: TProgramClassesOptions = [
  { value: ProgramClass.penetration, label: ProgramClassNames[ProgramClass.penetration] },
  { value: ProgramClass.decryption, label: ProgramClassNames[ProgramClass.decryption] },
  { value: ProgramClass.detection, label: ProgramClassNames[ProgramClass.detection] },
  { value: ProgramClass.antiSystem, label: ProgramClassNames[ProgramClass.antiSystem] },
  { value: ProgramClass.protection, label: ProgramClassNames[ProgramClass.protection] },
  { value: ProgramClass.antiPrograms, label: ProgramClassNames[ProgramClass.antiPrograms] },
  { value: ProgramClass.antiPersonnel, label: ProgramClassNames[ProgramClass.antiPersonnel] },
  { value: ProgramClass.controllers, label: ProgramClassNames[ProgramClass.controllers] },
  { value: ProgramClass.utilities, label: ProgramClassNames[ProgramClass.utilities] },
  { value: ProgramClass.demon, label: ProgramClassNames[ProgramClass.demon] },
]


export type Propgrams = Program[];

export const programs: Propgrams = [
  {
    id: 1,
    class: ProgramClass.penetration,
    power: 4,
    memoryUnits: 1,
    price: 400,
    name: "Молот",
    description: <>
      Сокрушает стены данных мощными электрическими импульсами, нанося им 2D6 урона каждую атаку.
      Очень шумная, при использовании автоматически привлечёт внимание любой защитной программы в радиусе 10 полей (прим.: о передвижении по Сети в части 5).
    </>,
    icon: <>светящийся красным молот</>,
  },
  {
    id: 2,
    class: ProgramClass.penetration,
    power: 2,
    memoryUnits: 2,
    price: 360,
    name: "Отбойник (Jackhammer)",
    description: <>
      Более "тихая", но менее мощная версия Молота, наносящая стенам данных 1D6 урона.
      Использует малые энергетические импульсы, для того, чтобы уничтожить стену.
    </>,
    icon: <>светящийся красным отбойный молоток, извергающий на стену данных поток раскалённых добела энергетических молний.</>
  },
  {
    id: 3,
    class: ProgramClass.penetration,
    power: 2,
    memoryUnits: 5,
    price: 660,
    name: "Червь",
    description: <>
      Червь - программа очень тонкого действия. Она эмулирует часть архитектуры системы, в которую требуется проникнуть, проскальзывает мимо стены данных и открывает её изнутри за 2 хода без обнаружения.
    </>,
    icon: <>Золотой червь-робот с зелёными неоновыми глазами.</>
  },
  {
    id: 4,
    class: ProgramClass.decryption,
    power: 3,
    memoryUnits: 2,
    price: 380,
    name: "Взломщик кода (Codecracker)",
    description: <>
      Серия программ "Взломщик кода", разработанная Interfact Software в 2008 году, является классикой во взломе кодовых шлюзов. Софт разбирает на части код защитного шлюза на низком уровне вместо подбора ключа шифрования.
    </>,
    icon: <>
      тонкий луч белого света, испускающийся из рук нетраннера и распространяющийся по шлюзу данных,
      превращая его в светящийся рассеянный туман.
    </>
  },
  {
    id: 5,
    class: ProgramClass.decryption,
    power: 4,
    memoryUnits: 2,
    price: 400,
    name: "Книга волшебника (Wizard's book)",
    description: <>
      Создана для перебора миллиардов возможных комбинаций кодов и паролей за секунды, пробуя каждую комбинацию по очереди.
      Особенно эффективна против кодовых шлюзов (при этом Сила увеличивается до 6).
    </>,
    icon: <>
      поток полыхающих белых символов, текущий из открытых ладоней нетраннера с невероятной скоростью.
    </>
  },
  {
    id: 6,
    class: ProgramClass.decryption,
    power: 5,
    memoryUnits: 3,
    price: 360,
    name: "Лотерея",
    description: <>
      "Лотерея" создана специально для взлома сложных шлюзов и зашифрованных папок с файлами,
      которые имеют определённое кодовое слово в качестве ключа.
      Программа "опрашивает" шлюз несколькими безобидными наводящими вопросами
      (например "этот предмет больше, чем хлебница?", "он горячий или холодный?"),
      которые дадут софту понимание структуры шлюза, а также выдадут ключ.
    </>,
    icon: <>
      приятно одетый молодой человек в деловом костюме начала 1900-х.
      Переговаривается краткими фразами с дверью и исчезает, как только она открывается.
    </>
  },
  {
    id: 7,
    class: ProgramClass.detection,
    power: 4,
    memoryUnits: 5,
    price: 610,
    name: "Сторожевой пёс (Watchdog)",
    description: <>
      Призван оповещать своего владельца о незаконном проникновении в систему.
      Оповещение может быть выполнено в виде активации сирены в реальном мире или посыле сообщения на определённый компьютер.
      Нетраннеры могут использовать Пса для патрулирования в Сети, настроив программу так, что она побежит к нужному кибердеку в случае нарушения безопасности.
      Такой приём позволяет охранять свои секретные файлы или бэкдоры в чужих компьютерах.
    </>,
    icon: <>
      большая чёрная металлическая собака с красными светящимися глазами и шипастым ошейником.
    </>
  },
  {
    id: 8,
    class: ProgramClass.detection,
    power: 3,
    memoryUnits: 5,
    price: 700,
    name: "Ищейка (Bloodhound)",
    description: <>
      Так же, как и у Сторожевого пса, задача этой программы состоит в обнаружении незаконных проникновений в систему, однако она может отследить источник проникновения и сообщить об этом своему владельцу.
      Также может быть использована при патрулировании в Сети.
    </>,
    icon: <>
      большая механическая собака
      из блестящего серого металла с синими светящимися глазами и толстым синим неоновым ошейником.
    </>
  },
  {
    id: 9,
    class: ProgramClass.detection,
    power: 2,
    memoryUnits: 6,
    price: 780,
    name: "Питбуль",
    description: <>
      Самая продвинутая программа из серии "Сторожевой пёс".
      Она не только отслеживает нарушителя, но и прерывает его соединение каждый раз,
      когда незваный гость пытается зайти из определённой точки доступа, заставляя его сменить телефонную линию или кибермодем.
      Также может быть использована при патрулировании в Сети.
    </>,
    icon: <>
      Коренастый механический пёс с красными светящимися глазами и толстым красным неоновым ошейником.
    </>
  },
  {
    id: 10,
    class: ProgramClass.detection,
    power: 3,
    memoryUnits: 1,
    price: 280,
    name: "ЕщёУвидимся (SeeYa)",
    description: <>
      Призвана обнаруживать невидимые ИКОНКИ в радиусе одной Подклетки.
      Это могут быть другие программы, нетраннеры и другие спрятанные в виртуальной реальности вещи.
    </>,
    icon: <>
      мерцающий серебряный экран.
    </>
  },
  {
    id: 11,
    class: ProgramClass.detection,
    power: 3,
    memoryUnits: 1,
    price: 280,
    name: "Скрытая Сила (Hidden Virtue)",
    description: <>
      Разработка Рашеля Бартмосса, призванная отличать "настоящие" ИКОНКИ от других виртуальных объектов.
      Например, Скрытая Сила может отличить настоящего человека от виртуального или сказать,
      какая книга в библиотеке - на самом деле скрытый файл.
    </>,
    icon: <>
      светящееся зелёным кольцо, сквозь которое нетраннер смотрит.
    </>
  },
  {
    id: 12,
    class: ProgramClass.detection,
    power: 4,
    memoryUnits: 4,
    price: 600,
    name: "Дорожный Радар (Speedtrap)",
    description: <>
      Программа раннего предупреждения, которая замечает присутствие вражеской программы
      в радиусе 10 полей от нетраннера (в пределах одной Подклетки).
      Может сообщить только сам факт присутствия программы, а не её точное положение.
    </>,
    icon: <>
      Стеклянная светящаяся тарелка, на которой появляются изображения.
      Если замечена программа, на тарелке возникает образ механического монстра.
    </>
  },
  {
    id: 13,
    class: ProgramClass.antiSystem,
    power: 3,
    memoryUnits: 2,
    price: 570,
    name: "Ликвидация (Flatline)",
    description: <>
      Призвана отследить и уничтожить рабочий интерфейс вашего кибердека.
      Один разряд - и вот уже чип интерфейса нуждается в замене.
    </>,
    icon: <>
      луч жёлтого неонового света, исходящий из пальцев нетраннера.
    </>
  },
  {
    id: 14,
    class: ProgramClass.antiSystem,
    power: 2,
    memoryUnits: 2,
    price: 540,
    name: "Ядовитая Ликвидация (Poison Flatline)",
    description: <>
      Уничтожает не только интерфейс, но и всю память дека,
      делая его непригодным для использования и вынуждая сделать полную замену устройства.
    </>,
    icon: <>
      луч зелёного неонового света, исходящего из пальцев нетраннера.
    </>
  },
  {
    id: 15,
    class: ProgramClass.antiSystem,
    power: 3,
    memoryUnits: 2,
    price: 570,
    name: "Краш (Krash)",
    description: <>
      Выводит из строя ЦПУ системы или дека (или ближайший к нетраннеру ЦПУ в многопроцессорных системах) на 1D6+1 ходов.
      Выведенный из строя дек автоматически отключает своего нетраннера от Сети,
      а система перезагружается через выпавшее время.
    </>,
    icon: <>
      мультяшная бомба с зажжённым фитилём.
    </>
  },
  {
    id: 16,
    class: ProgramClass.antiSystem,
    power: 4,
    memoryUnits: 2,
    price: 600,
    name: "ДеКРАШ (DecKRASH)",
    description: <>
      Модифицированнная версия Краша, действующая только на кибердеки и отключающая нетраннера от Сети на 1D6 ходов.
    </>,
    icon: <>
      мультяшный динамит с фитилём.
    </>
  },
  {
    id: 17,
    class: ProgramClass.antiSystem,
    power: 3,
    memoryUnits: 2,
    price: 600,
    name: "Мёрфи",
    description: <>
      Мёрфи заставляет кибердек запустить все свои приложения, используя как можно больше ресурсов системы.
    </>,
    icon: <>
      никогда не знаешь, что может случиться...
      (прим.: отсылка на известную нетраннершу Паука Мёрфи, которая постоянно говорит "никогда не знаешь, что может случиться", "you never know").
    </>
  },
  {
    id: 18,
    class: ProgramClass.antiSystem,
    power: 4,
    memoryUnits: 2,
    price: 600,
    name: "Вирузз (Virizz)",
    description: <>
      Этот вирус автоматически атакует, отключая все функции кибердека
      или системы по одной до полной остановки работы устройства.
    </>,
    icon: <>
      светящаяся неоновая фигура в форме ДНК.
    </>
  },
  {
    id: 19,
    class: ProgramClass.antiSystem,
    power: 4,
    memoryUnits: 2,
    price: 590,
    name: "Вирус 15",
    description: <>
      Этот вирус заставляет кибердек
      или систему стирать случайный файл или программу каждый ход до полной остановки устройства.
    </>,
    icon: <>
      светящаяся неоновая фигура в форме ДНК.
    </>
  },
  {
    id: 20,
    class: ProgramClass.penetration,
    power: 3,
    memoryUnits: 1,
    price: 300,
    name: "Невидимость",
    description: <>
      Невидимость накладывает ложный сигнал на сетевой след кибердека, превращая его в безобидный шум.
      Позволяет нетраннеру перемещаться по Сети незамеченным.
    </>,
    icon: <>
      мерцающая переливающаяся ткань, покрывающая нетраннера.
    </>
  },
  {
    id: 21,
    class: ProgramClass.penetration,
    power: 4,
    memoryUnits: 3,
    price: 480,
    name: "Скрытность",
    description: <>
      Подавляет сигнал нетраннера, делая его обнаружение довольно трудной задачей.
      Его всё ещё физически видно, однако вражеские программы не будут реагировать на его присутствие.
      Тем не менее, другие хакеры могут видеть человека, использующего эту программу.
    </>,
    icon: <>
      ткань, сотканная из чёрной энергии, натянутая поверх ИКОНКИ нетраннера
    </>
  },
  {
    id: 22,
    class: ProgramClass.penetration,
    power: 3,
    memoryUnits: 2,
    price: 320,
    name: "Репликатор",
    description: <>
      Создаёт миллионы копий вашего цифрового следа и рассылает их во все стороны,
      сбивая с толку преследующую программу.
      Если повезёт, преследователь пойдёт в тупик за ложным сигналом.
      Особенно эффективна против программ серии "Пёс"
      (прим.: туда входят Сторожевой пёс, Ищейка, Питбуль, и Цербер),
      ведь она перегружает их возможности ИИ слишком большим количеством решений.
      Сила - 3 (против большинства программ, 4 - против Питбулей, Ищеек и Церберов))
    </>,
    icon: <>
      хромовая сфера, создающая миллионы мерцающих голографических изображений нетраннера, которые убегают во всех направлениях.
    </>
  },
  {
    id: 23,
    class: ProgramClass.protection,
    power: 3,
    memoryUnits: 1,
    price: 150,
    name: "Щит",
    description: <>
      Останавливает прямую атаку на нетраннера.
      При успешном использовании вражеский приём срывается и не наносит урона.
    </>,
    icon: <>
      круговое вращающееся энергетическое поле, возникающее перед хакером.
    </>
  },
  {
    id: 24,
    class: ProgramClass.protection,
    power: 4,
    memoryUnits: 2,
    price: 160,
    name: "Силовой щит",
    description: <>
      Более мощная версия Щита.
    </>,
    icon: <>
      мерцающий серебряный энергетический барьер.
    </>
  },
  {
    id: 25,
    class: ProgramClass.protection,
    power: 5,
    memoryUnits: 2,
    price: 160,
    name: "Отражатель",
    description: <>
      Призвана отклонять все атаки программ Оглушение, Огнемёт и Нокаут. Не действует против любого другого софта.
    </>,
    icon: <>
      вспышки синих и зелёных цветов, объединяющихся в зеркальную чашу.
    </>
  },
  {
    id: 26,
    class: ProgramClass.protection,
    power: 4,
    memoryUnits: 2,
    price: 170,
    name: "Броня",
    description: <>
      Предназначена для замедления всех атак программ-киллеров.
      При успешном использовании вражеский приём будет полностью остановлен.
      При неуспешном, урон от Оглушения, Огнемёта, Мозготёра, Зомби и Цербера будет уменьшен на 3 очка.
    </>,
    icon: <>
      золотая броня в высокотехнологичном стиле.
    </>
  },
  {
    id: 27,
    class: ProgramClass.protection,
    power: 4,
    memoryUnits: 2,
    price: 180,
    name: "Артобстрел",
    description: <>
      Создаёт стену шума, которая ослепляет атакующие программы и позволяет нетраннеру легко проскользнуть внутрь.
      Хорошо показывает себя против большинства программ и менее эффективно против серии "Пёс".

      Сила - 4 (против большинства программ, 2 - против Питбулей, Ищеек и Церберов)
    </>,
    icon: <>
      вихревое облако ослепительно ярких разноцветных огней.
    </>
  },
  {
    id: 28,
    class: ProgramClass.antiPrograms,
    power: 2,
    memoryUnits: 5,
    price: 1320,
    name: "Киллер II",
    description: <>
      Вирус общего действия, призванный убивать другие программы.
      Он проникает в логические цепи жертвы и наполняет их ошибками с ошеломляющей скоростью,
      заставляя цель "вылететь" и понизить свой урон на 1D6.
      Очень простая по структуре, но в то же время сильная программа.
    </>,
    icon: <>
      гуманоидный робот, одетый в самурайскую броню. За маской горят красные глаза, а в руках - светящаяся катана.
    </>
  },
  {
    id: 29,
    class: ProgramClass.antiPrograms,
    power: 4,
    memoryUnits: 5,
    price: 1400,
    name: "Киллер IV",
    description: <>
      Вирус общего действия, призванный убивать другие программы.
      Он проникает в логические цепи жертвы и наполняет их ошибками с ошеломляющей скоростью,
      заставляя цель "вылететь" и понизить свой урон на 1D6.
      Очень простая по структуре, но в то же время сильная программа.
    </>,
    icon: <>
      гуманоидный робот, одетый в самурайскую броню. За маской горят красные глаза, а в руках - светящаяся катана.
    </>
  },
  {
    id: 30,
    class: ProgramClass.antiPrograms,
    power: 6,
    memoryUnits: 5,
    price: 1480,
    name: "Киллер VI",
    description: <>
      Вирус общего действия, призванный убивать другие программы.
      Он проникает в логические цепи жертвы и наполняет их ошибками с ошеломляющей скоростью,
      заставляя цель "вылететь" и понизить свой урон на 1D6.
      Очень простая по структуре, но в то же время сильная программа.
    </>,
    icon: <>
      гуманоидный робот, одетый в самурайскую броню. За маской горят красные глаза, а в руках - светящаяся катана.
    </>
  },
  {
    id: 31,
    class: ProgramClass.antiPrograms,
    power: 2,
    memoryUnits: 3,
    price: 880,
    name: "Мантикора",
    description: <>
      Простейшая программа серии Ассассин.
      Призвана обнаруживать и уничтожать программы-демоны.
      Если в вашем арсенале нет Демона, софт вас проигнорирует.
    </>,
    icon: <>
      огромная схематичная фигура в виде льва, составленная из красных неоновых линий.
      Скорпионий хвост висит аркой над её плечом.
    </>
  },
  {
    id: 32,
    class: ProgramClass.antiPrograms,
    power: 3,
    memoryUnits: 3,
    price: 920,
    name: "Гидра",
    description: <>
      Усиленная версия Мантикоры.
    </>,
    icon: <>
      блестящий синий туман, который обволакивает жертву и дематериализует её.
    </>
  },
  {
    id: 33,
    class: ProgramClass.antiPrograms,
    power: 4,
    memoryUnits: 3,
    price: 960,
    name: "Дракон",
    description: <>
      Самая мощная версия Мантикоры.
    </>,
    icon: <>
      Массивный золотой механический дракон.
      Из его глаз бьют разноцветные лучи лазера, а по коже расходятся электрические разряды.
    </>
  },
  {
    id: 34,
    class: ProgramClass.antiPrograms,
    power: 4,
    memoryUnits: 3,
    price: 1000,
    name: "Трубкозуб (Aardvark)",
    description: <>
      Создана для нахождения и устранения Червей.
      Немедленно находит и уничтожает нужную программу, даже если она является подпрограммой Демона.

      Сила - 4 против Червей, не действует против других программ
    </>,
    icon: <>
      сеть тонких жёлтых неоновых линий, окружающая Червя и сдавливающая его.
      Затем сеть с жертвой внутри исчезает.
    </>
  },
  {
    id: 35,
    class: ProgramClass.antiPersonnel,
    power: 3,
    memoryUnits: 3,
    price: 6000,
    name: "Оглушение",
    description: <>
      Посылает непреодолимо мощный заряд энергии прямо на жертву, обездвиживая её на 1D6 ходов.
      Часто используется сотрудниками NetWatch.
    </>,
    icon: <>
      Языки синего пламени, вырывающиеся из руки хакера.
    </>
  },
  {
    id: 36,
    class: ProgramClass.antiPersonnel,
    power: 4,
    memoryUnits: 4,
    price: 6750,
    name: "Огнемёт",
    description: <>
      Более мощный вариант Оглушения, который наносит 1D10 физического урона нетраннеру
    </>,
    icon: <>
      струя тёмно-красного огня, выпускаемая из поднятой руки нетраннера.
    </>
  },
  {
    id: 37,
    class: ProgramClass.antiPersonnel,
    power: 3,
    memoryUnits: 4,
    price: 6250,
    name: "Меч",
    description: <>
      Вариант программы Огнемёт. Наносит 1D6 физического урона.
    </>,
    icon: <>
      светящаяся катана с энергетическим лезвием.
    </>
  },
  {
    id: 38,
    class: ProgramClass.antiPersonnel,
    power: 3,
    memoryUnits: 4,
    price: 6500,
    name: "Мозготёр (Brainwipe)",
    description: <>
      Простейший представитель серии "чёрных" программ, которые атакуют нетраннера, а не его софт.
      Мозготёр отслеживает жертву и изжаривает её передний мозг ударом электрического тока,
      превращая её в овощ (понижает значение интеллекта ИНТ на 1D6 за каждый удар).
      Атакованный хакер в ужасе кричит, чувствуя, как его разум плавится,
      пока значение ИНТ не упадёт до нуля и он не умрёт.
      Потерянные очки интеллекта нельзя восстановить.
    </>,
    icon: <>
      электрическая дуга кислотно-зелёного цвета, которая выскакивает из пола и убивает нетраннера.
    </>
  },
  {
    id: 39,
    class: ProgramClass.antiPersonnel,
    power: 5,
    memoryUnits: 4,
    price: 7500,
    name: "Зомби",
    description: <>
      Более мощная версия Мозготёра. Понижает значение ИНТ на 1D6 очков.
    </>,
    icon: <>
      скелет, закутанный в зловонную серую дымку.
      У него нет глаз, а в гниющей плоти ползают личинки.
      Он делает резкий выпад в сторону жертвы и отрывает ей голову.
    </>
  },
  {
    id: 40,
    class: ProgramClass.antiPersonnel,
    power: 4,
    memoryUnits: 4,
    price: 7250,
    name: "Лич",
    description: <>
      Продвинутая форма программы Зомби.
      Она также разрушает передний мозг атакованного, но делает это последовательно.
      Большая часть воспоминаний стирается, освобождая место для легкоконтролируемой (ведущим игры) псевдо-личности.
    </>,
    icon: <>
      металлический скелет в чёрных одеждах, носящий почерневшую корону.
      Он берёт нетраннера в свою ледяную хватку и утаскивает его под землю.
    </>
  },
  {
    id: 41,
    class: ProgramClass.antiPersonnel,
    power: 4,
    memoryUnits: 4,
    price: 6250,
    name: "Поджигатель",
    description: <>
      Программа-киллер в чистом виде.
      Используя функции Ищейки, она отслеживает нарушителя.
      Софт незаметно внедряется в систему управления питанием и поражает проводку мегаваттным разрядом.
      Такой скачок тока заставляет провода гореть, схему взорваться, а нетраннера поджариться,
      будто бы на электрическом стуле.
      Поджигателя являются прекрасными скрытными убийцами,
      ведь они не оставляют почти никаких улик в обугленных обломках.
    </>,
    icon: <>
      столб огня, который громко проговаривает имя нетраннера шипящим голосом, а затем бросается на него.
    </>
  },
  {
    id: 42,
    class: ProgramClass.antiPersonnel,
    power: 6,
    memoryUnits: 6,
    price: 10000,
    name: "Цербер (Hellhound)",
    description: <>
      Совмещает худшие качества Питбуля и Ликвидации.
      Она обнаруживает нарушителя и посылает смодулированный особым образом сигнал,
      который вызывает сердечный приступ у людей (наносит 2D6 физического урона).
      Если же нетраннеру удаётся сбежать, она остаётся активной и ждёт в терминалах СДС
      (о том, что это такое, можете почитать здесь), пока не появится определённый шаблон мозговых волн.
      Затем она снова отслеживает человека и убивает его.
      Цербер терпелив и беспощаден, ведь может выжидать годами, пока нетраннер не зайдёт в Сеть.
      Редкость и высокая цена этой программы обеспечивают её использование только против хакеров самого высокого уровня.
    </>,
    icon: <>
      огромный чёрный металлический волк. Его глаза горят белым, а по коже проходит рябью огонь.
      Он повторяет неестественным "металлическим" голосом имя нетраннера.
    </>
  },
  {
    id: 43,
    class: ProgramClass.antiPersonnel,
    power: 4,
    memoryUnits: 3,
    price: 6250,
    name: "Спаззм (Spazz)",
    description: <>
      Вызывает у хакера приступы эпилепсии.
      При этом значение РЕФ жертвы падает вдвое на 1D6 ходов, значительно снижая её инициативу
      (прим.:броски на инициативу помогают определить, кто будет атаковать в бою первым).
    </>,
    icon: <>
      нимб из электроэнергии, окольцовывающий цель.
    </>
  },
  {
    id: 44,
    class: ProgramClass.antiPersonnel,
    power: 5,
    memoryUnits: 4,
    price: 6500,
    name: "Клей",
    description: <>
      Используется отрядом сотрудников NetWatch "Ледяные" как программа ареста.
      Замораживает нетраннера на 1D10 ходов (4 ходов достаточно, чтобы отследить его расположение в реальном мире).
      В "свободное время" неткопы могут послать на место отряд задержания.
    </>,
    icon: <>
      изменчивый узор из красных фигур, который мелькает по всему полу и запутывает нетраннера.
    </>
  },
  {
    id: 45,
    class: ProgramClass.antiPersonnel,
    power: 4,
    memoryUnits: 3,
    price: 6250,
    name: "Нокаут",
    description: <>
      Посылает мощный разряд, который вырубает нетраннера на 1D6 часов, при этом он автоматически отключается от Сети.
      Часто используется в телефонных компаниях и офисных компьютерах как средство защиты
      от неглубоких проникновений в систему.
    </>,
    icon: <>
      схематичное изображение боксёра из жёлтых неоновых линий,
      которое неожиданно появляется и бьёт прямо в ИКОНКУ нетраннера.
    </>
  },
  {
    id: 46,
    class: ProgramClass.antiPersonnel,
    power: 3,
    memoryUnits: 3,
    price: 6000,
    name: "Разъёмная Атака (Jack Attack)",
    description: <>
      Часто используется в качестве программ для ареста.
      Не даёт хакеру отключиться от Сети на 1D6 ходов.
    </>,
    icon: <>
      пара светящихся схематических наручников, сковывающих запястья нетраннера.
    </>
  },
  {
    id: 47,
    class: ProgramClass.controllers,
    power: 4,
    memoryUnits: 1,
    price: 140,
    name: "Видеомастер (Viddy Master)",
    description: <>
      Позволяет контролировать видеоэкраны.
    </>,
    icon: <>
      Примечание: Контроллеры запускаются из Меню функцией УДАЛЁННЫЙ КОНТРОЛЬ и не имеют ИКОНОК
      (прим.: о Меню и его функциях в части 4).
    </>
  },
  {
    id: 48,
    class: ProgramClass.controllers,
    power: 4,
    memoryUnits: 1,
    price: 140,
    name: "Магнитола",
    description: <>
      Позволяет контролировать микрофоны, громкоговорители и вокодеры (vocoders - устройства, синтезирующие голос).
    </>,
    icon: <>
      Примечание: Контроллеры запускаются из Меню функцией УДАЛЁННЫЙ КОНТРОЛЬ и не имеют ИКОНОК
      (прим.: о Меню и его функциях в части 4).
    </>
  },
  {
    id: 49,
    class: ProgramClass.controllers,
    power: 3,
    memoryUnits: 1,
    price: 140,
    name: "Сезам, Откройся (Open Sesamé)",
    description: <>
      Программа начального уровня, предназначенная для открытия дверей, лифтов и т.д.
    </>,
    icon: <>
      Примечание: Контроллеры запускаются из Меню функцией УДАЛЁННЫЙ КОНТРОЛЬ и не имеют ИКОНОК
      (прим.: о Меню и его функциях в части 4).
    </>
  },
  {
    id: 50,
    class: ProgramClass.controllers,
    power: 5,
    memoryUnits: 1,
    price: 150,
    name: "Джинн",
    description: <>
      Программа высокого уровня, предназначенная для открытия дверей, лифтов и т.д.
    </>,
    icon: <>
      Примечание: Контроллеры запускаются из Меню функцией УДАЛЁННЫЙ КОНТРОЛЬ и не имеют ИКОНОК
      (прим.: о Меню и его функциях в части 4).
    </>
  },
  {
    id: 51,
    class: ProgramClass.controllers,
    power: 3,
    memoryUnits: 1,
    price: 130,
    name: "Hotwire™",
    description: <>
      Открывает доступ к роботизированным автомобилям и другим транспортным средствам.
    </>,
    icon: <>
      Примечание: Контроллеры запускаются из Меню функцией УДАЛЁННЫЙ КОНТРОЛЬ и не имеют ИКОНОК
      (прим.: о Меню и его функциях в части 4).
    </>
  },
  {
    id: 52,
    class: ProgramClass.controllers,
    power: 3,
    memoryUnits: 1,
    price: 130,
    name: "Dee-2®",
    description: <>
      Даёт управление роботами, механизированными уборщиками, автоматическими конвейерами и т.д.
    </>,
    icon: <>
      Примечание: Контроллеры запускаются из Меню функцией УДАЛЁННЫЙ КОНТРОЛЬ и не имеют ИКОНОК
      (прим.: о Меню и его функциях в части 4).
    </>
  },
  {
    id: 53,
    class: ProgramClass.controllers,
    power: 4,
    memoryUnits: 1,
    price: 140,
    name: "Кристальный шар",
    description: <>
      Позволяет контролировать видеокамеры, беспроводные датчики и т.д.
    </>,
    icon: <>
      Примечание: Контроллеры запускаются из Меню функцией УДАЛЁННЫЙ КОНТРОЛЬ и не имеют ИКОНОК
      (прим.: о Меню и его функциях в части 4).
    </>
  },
  {
    id: 54,
    class: ProgramClass.controllers,
    power: 4,
    memoryUnits: 1,
    price: 140,
    name: "News at 8™",
    description: <>
      Открывает сетевой доступ к терминалам данных и газетным стойкам для получения информации.
    </>,
    icon: <>
      Примечание: Контроллеры запускаются из Меню функцией УДАЛЁННЫЙ КОНТРОЛЬ и не имеют ИКОНОК
      (прим.: о Меню и его функциях в части 4).
    </>
  },
  {
    id: 55,
    class: ProgramClass.controllers,
    power: 5,
    memoryUnits: 1,
    price: 150,
    name: "Звонок Домой (Phone Home)",
    description: <>
      Даёт нетраннеру возможность принимать или совершать звонки из Сети.
      Имеет силу 2 в защите против прослушки собственных звонков или прослушивании чужих.
    </>,
    icon: <>
      Примечание: Контроллеры запускаются из Меню функцией УДАЛЁННЫЙ КОНТРОЛЬ и не имеют ИКОНОК
      (прим.: о Меню и его функциях в части 4).
    </>
  },
  {
    id: 56,
    class: ProgramClass.utilities,
    power: 8,
    memoryUnits: 2,
    price: 180,
    name: "Датабэйзер (Databaser)",
    description: <>
      Создаёт незашифрованные файлы для хранения в них информации.
    </>,
    icon: <></>
  },
  {
    id: 57,
    class: ProgramClass.utilities,
    power: 6,
    memoryUnits: 2,
    price: 160,
    name: "Псевдоним (Alias)",
    description: <>
      Изменяет имена файлов, замещая их безобидными названиями, которые скрывают истинную природу хранилищ информации.
    </>,
    icon: <></>
  },
  {
    id: 58,
    class: ProgramClass.utilities,
    power: 3,
    memoryUnits: 1,
    price: 130,
    name: "Пересборка (Re-rezz)",
    description: <>
      Перекомпилирует и восстанавливает повреждённые файлы или программы.
      Если код был испорчен - это самое верное средство починить его перед тем, как сделать копию.
    </>,
    icon: <></>
  },
  {
    id: 59,
    class: ProgramClass.utilities,
    power: 8,
    memoryUnits: 2,
    price: 180,
    name: "Мгновенное воспроизведение (Instant Replay)",
    description: <>
      Записывает весь путь нетраннера, так что он может вернуться назад по своим шагам.
    </>,
    icon: <></>
  },
  {
    id: 60,
    class: ProgramClass.utilities,
    power: 5,
    memoryUnits: 1,
    price: 150,
    name: "ШлюзМастер (GateMaster)",
    description: <>
      Удаляет программы Вирузз и Вирус 15 без необходимости полного отключения системы.
    </>,
    icon: <></>
  },
  {
    id: 61,
    class: ProgramClass.utilities,
    power: 4,
    memoryUnits: 2,
    price: 160,
    name: "Замóк (Padlock)",
    description: <>
      Защищает кибердек от доступа посторонних лиц кодовым словом.
    </>,
    icon: <></>
  },
  {
    id: 62,
    class: ProgramClass.utilities,
    power: 7,
    memoryUnits: 2,
    price: 170,
    name: "ЭлектроЗамóк (ElectroLock)",
    description: <>
      Меняет статус файла с незашифрованного на зашифрованный,
      что равноценно защите кодовым шлюзом с силой 3
    </>,
    icon: <></>
  },
  {
    id: 63,
    class: ProgramClass.utilities,
    power: 4,
    memoryUnits: 1,
    price: 140,
    name: "Filelocker®",
    description: <>
      Зашифровывает файл защитой, эквивалентной защите кодовым шлюзом с силой 5.
    </>,
    icon: <></>
  },
  {
    id: 64,
    class: ProgramClass.utilities,
    power: 4,
    memoryUnits: 1,
    price: 150,
    name: "НетКарта (NetMap)",
    description: <>
      Предоставляет карту-локатор, которая может отслеживать нужные вещи в большинстве крупных регионов Сети,
      добавляет +2 к броскам с использованием навыка Знание Систем для нахождения различных мест в цифровом пространстве.
    </>,
    icon: <></>
  },
  {
    id: 65,
    class: ProgramClass.utilities,
    power: 4,
    memoryUnits: 1,
    price: 140,
    name: "Упаковщик Файлов",
    description: <>
      Сжимает файлы до половины их исходного размера в ЕП. Распаковка сжатого файла занимает 2 хода.
    </>,
    icon: <></>
  },
  {
    id: 66,
    class: ProgramClass.utilities,
    power: 4,
    memoryUnits: 1,
    price: 140,
    name: "Упаковщик Файлов",
    description: <>
      Позволяет сделать копию любой программы (кроме антипрограмм и программ-киллеров).
      Для этого процесса потребуется чипридер кибердека и дополнительные чипы данных.
    </>,
    icon: <></>
  },
  {
    id: 67,
    class: ProgramClass.demon,
    power: 3,
    memoryUnits: 3,
    price: 1000,
    name: "Имп (вмещает 2 программы)",
    description: <>
      Ниже представлен софт четырёх уровней, созданный легендарным Рашелем Бартмоссом
      в компании CCI Development в 2004 году.
      Программы-демоны могут совмещать в себе сразу несколько программ в качестве подпроцессов
      - если короче: две, три, четыре или даже пять программ в одной.
      Чтобы использовать подпрограмму, нужно активировать Демона, а затем выбрать нужный процесс.
      Софт внутри Демона выглядит и работает так же, как и оригинальный, однако обычно менее мощный,
      ведь в бою приходится использовать силу ядра материнской программы.
    </>,
    icon: <>
      маленькая оранжевая сфера из света с двумя довольными глазами.
      Постоянно издаёт пикание, свист и гудение.
    </>
  },
  {
    id: 68,
    class: ProgramClass.demon,
    power: 3,
    memoryUnits: 4,
    price: 1160,
    name: "Ифрит (3 программы)",
    description: <>
      Ниже представлен софт четырёх уровней, созданный легендарным Рашелем Бартмоссом
      в компании CCI Development в 2004 году.
      Программы-демоны могут совмещать в себе сразу несколько программ в качестве подпроцессов
      - если короче: две, три, четыре или даже пять программ в одной.
      Чтобы использовать подпрограмму, нужно активировать Демона, а затем выбрать нужный процесс.
      Софт внутри Демона выглядит и работает так же, как и оригинальный, однако обычно менее мощный,
      ведь в бою приходится использовать силу ядра материнской программы.
    </>,
    icon: <>
      высокий могучий чёрный мужчина, одетый в вечерний наряд и феску.
      В своём пиджаке он носит кинжал и говорит глубоким голосом в официальном стиле.
    </>
  },
  {
    id: 69,
    class: ProgramClass.demon,
    power: 4,
    memoryUnits: 4,
    price: 1200,
    name: "Суккуб  (4 программы)",
    description: <>
      Ниже представлен софт четырёх уровней, созданный легендарным Рашелем Бартмоссом
      в компании CCI Development в 2004 году.
      Программы-демоны могут совмещать в себе сразу несколько программ в качестве подпроцессов
      - если короче: две, три, четыре или даже пять программ в одной.
      Чтобы использовать подпрограмму, нужно активировать Демона, а затем выбрать нужный процесс.
      Софт внутри Демона выглядит и работает так же, как и оригинальный, однако обычно менее мощный,
      ведь в бою приходится использовать силу ядра материнской программы.
    </>,
    icon: <>
      голая лысая женщина с пышными формами, сделанная из блестящего хрома.
      У неё синие глаза без зрачков, а на спине находятся крылья, как летучей мыши.
    </>
  },
  {
    id: 70,
    class: ProgramClass.demon,
    power: 5,
    memoryUnits: 5,
    price: 1240,
    name: "Балрон (Balron) (4 программы) ",
    description: <>
      Ниже представлен софт четырёх уровней, созданный легендарным Рашелем Бартмоссом
      в компании CCI Development в 2004 году.
      Программы-демоны могут совмещать в себе сразу несколько программ в качестве подпроцессов
      - если короче: две, три, четыре или даже пять программ в одной.
      Чтобы использовать подпрограмму, нужно активировать Демона, а затем выбрать нужный процесс.
      Софт внутри Демона выглядит и работает так же, как и оригинальный, однако обычно менее мощный,
      ведь в бою приходится использовать силу ядра материнской программы.
    </>,
    icon: <>
      огромная фигура мужчины атлетического телосложения.
      Он одет в футуристичную чёрную броню, блестящую отражённым светом.
      В одной руке у него находится светящийся энергетический меч, на конце другой - множество щупалец неоново-зелёного цвета.
      Его глаза, скрытые за визором, горят красным, а его голос похож на шипение змеи.
    </>
  },
];
