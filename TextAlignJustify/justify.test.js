const justify = require("./justify");

const result1 = `Lorem  ipsum  dolor  sit amet,
consectetur  adipiscing  elit.
Vestibulum    sagittis   dolor
mauris,  at  elementum  ligula
tempor  eget.  In quis rhoncus
nunc,  at  aliquet orci. Fusce
at   dolor   sit   amet  felis
suscipit   tristique.   Nam  a
imperdiet   tellus.  Nulla  eu
vestibulum    urna.    Vivamus
tincidunt  suscipit  enim, nec
ultrices   nisi  volutpat  ac.
Maecenas   sit   amet  lacinia
arcu,  non dictum justo. Donec
sed  quam  vel  risus faucibus
euismod.  Suspendisse  rhoncus
rhoncus  felis  at  fermentum.
Donec lorem magna, ultricies a
nunc    sit    amet,   blandit
fringilla  nunc. In vestibulum
velit    ac    felis   rhoncus
pellentesque. Mauris at tellus
enim.  Aliquam eleifend tempus
dapibus. Pellentesque commodo,
nisi    sit   amet   hendrerit
fringilla,   ante  odio  porta
lacus,   ut   elementum  justo
nulla et dolor.`;

const result2 = `Lorem   ipsum  dolor
sit            amet,
consectetur
adipiscing     elit.
Vestibulum  sagittis
dolor   mauris,   at
elementum     ligula
tempor eget. In quis
rhoncus   nunc,   at
aliquet  orci. Fusce
at  dolor  sit  amet
felis       suscipit
tristique.   Nam   a
imperdiet    tellus.
Nulla  eu vestibulum
urna.        Vivamus
tincidunt   suscipit
enim,  nec  ultrices
nisi   volutpat  ac.
Maecenas   sit  amet
lacinia   arcu,  non
dictum  justo. Donec
sed  quam  vel risus
faucibus    euismod.
Suspendisse  rhoncus
rhoncus   felis   at
fermentum.     Donec
lorem         magna,
ultricies a nunc sit
amet,        blandit
fringilla  nunc.  In
vestibulum  velit ac
felis        rhoncus
pellentesque. Mauris
at    tellus   enim.
Aliquam     eleifend
tempus      dapibus.
Pellentesque
commodo,   nisi  sit
amet       hendrerit
fringilla, ante odio
porta    lacus,   ut
elementum      justo
nulla et dolor.`;

const result3 = `Lorem     ipsum
dolor sit amet,
consectetur
adipiscing
elit.
Vestibulum
sagittis  dolor
mauris,      at
elementum
ligula   tempor
eget.  In  quis
rhoncus   nunc,
at      aliquet
orci.  Fusce at
dolor  sit amet
felis  suscipit
tristique.  Nam
a     imperdiet
tellus.   Nulla
eu   vestibulum
urna.   Vivamus
tincidunt
suscipit  enim,
nec    ultrices
nisi   volutpat
ac.    Maecenas
sit        amet
lacinia   arcu,
non      dictum
justo.    Donec
sed   quam  vel
risus  faucibus
euismod.
Suspendisse
rhoncus rhoncus
felis        at
fermentum.
Donec     lorem
magna,
ultricies     a
nunc  sit amet,
blandit
fringilla nunc.
In   vestibulum
velit  ac felis
rhoncus
pellentesque.
Mauris       at
tellus    enim.
Aliquam
eleifend tempus
dapibus.
Pellentesque
commodo,   nisi
sit        amet
hendrerit
fringilla, ante
odio      porta
lacus,       ut
elementum justo
nulla et dolor.`;

const strToTest = result1.replace(/\n/g, " ").replace(/[ ]{2,}/g, " ");

test("test 1 - length 30", () => {
  expect(justify(strToTest, 30)).toBe(result1);
});

test("test 2 - length 20", () => {
  expect(justify(strToTest, 20)).toBe(result2);
});

test("test 3 - length 15", () => {
  expect(justify(strToTest, 15)).toBe(result3);
});
