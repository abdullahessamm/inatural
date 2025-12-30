<script setup>
import L from "leaflet";
import { onMounted, ref, watch } from "vue";
import PrimaryButtonComponent from "../Buttons/PrimaryButtonComponent.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// branches data
const cities = {
  // ahsaa
  ahssa: {
    name: "الأحساء",
    coords: [25.42944, 49.62194],
    branches: [
      {
        storeName: "العامر القديم",
        coords: [25.3890616, 49.6033935],
        address:
          "طريق الأمير سلطان،, Alfaisaliyah 1st, Al Hofuf 36364, Saudi Arabia",
      },
      {
        storeName: "هايبر العامر",
        coords: [25.4231223, 49.5968949],
        address:
          "4829، مناطق زراعية، الهفوف والمبرز 36342 6365،, Al Hofuf Saudi Arabia",
      },
      {
        storeName: "هجر سنتر",
        coords: [25.365781, 49.6423323],
        address: "طريق العقير, Al Hofuf 36367, Saudi Arabia",
      },
      {
        storeName: "العثيم مول الاحساء",
        coords: [25.400436, 49.577898],
        address: "طريق الظهران،, Albustan, Al Mubarraz 36341, Saudi Arabia",
      },
    ],
  },
  // dammam
  dammam: {
    name: "الدمام",
    coords: [26.4344, 50.1033],
    branches: [
      {
        storeName: "طابا الفيصلية",
        coords: [26.3926565, 50.0476438],
        address: "شارع أبو بكر الصديق، الفيصلية، الدمام 32272",
      },
      {
        storeName: "العثيم مول الدمام",
        coords: [26.3999642, 50.1165625],
        address:
          "Prince Mohammed Bin Fahd Branch Rd, Al Shifa، Othaim Mall Othaim Mall،, Dammam 32236, Saudi Arabia",
      },
      {
        storeName: "أمازون الجسر",
        coords: [26.2059172, 50.1978236],
        address:
          "طريق الملك خالد، الجسر، الخبر 34714، المملكة العربية السعودية",
      },
      {
        storeName: "تخفيضات العائلة الدمام",
        coords: [26.4316775, 50.067796],
        address: "حي، طريق الأمير نايف بن عبدالعزيز، الجلوية، الدمام 32246",
      },
      {
        storeName: "النخيل مول الدمام",
        coords: [26.391591, 50.037597],
        address: "3543 King Fahd Road, Al Manar, Dammam 32274",
      },
      {
        storeName: "الظهران مول",
        coords: [26.3055458, 50.1731232],
        address:
          "853C+XW, Mall of Dhahran Blvd, Al Dawhah Al Janubiyah, Dhahran 34457",
      },
    ],
  },
  // jeddah
  jeddah: {
    name: "جدة",
    coords: [21.4858, 39.1925],
    branches: [
      {
        storeName: "أمازون جدة",
        coords: [21.6333461, 39.1623614],
        address: "Al-Nuzha, An Nuzhah, Jeddah 23534",
      },
      {
        storeName: "الياسمين مول",
        coords: [21.593349, 39.228251],
        address: "H6RH+P4, Al-Manar, Jeddah 23462",
      },
      {
        storeName: "مول العرب",
        coords: [21.632517, 39.156161],
        address: "Al-Madinah Al-Munawarah Rd, An Nuzhah, Jeddah 23532",
      },
      {
        storeName: "ذا فيلدج",
        coords: [21.7739847, 39.1702953],
        address:
          "حي, 7021 Prince Talal Bin Mansour Rd, Al Asalah, 5342, Jeddah 23738, Saudi Arabia",
      },
      {
        storeName: "جدة بارك",
        coords: [21.5565224, 39.1851878],
        address: "H54P+G8, Aziziyah, Jeddah 23334, Saudi Arabia",
      },
      {
        storeName: "يو ووك",
        coords: [21.5827878, 39.1406962],
        address: "3467 Al Amir Sultan, Al Zahra, Jeddah 23424, Saudi Arabia",
      },
      {
        storeName: "عزيز مول",
        coords: [21.576846, 39.196832],
        address: "Prince Majid Rd, Al Faisaliyyah, Jeddah 23447, Saudi Arabia",
      },
      {
        storeName: "السلام مول جدة",
        coords: [21.507193, 39.2237106],
        address:
          "King Abdallah Rd, As Sulaimaniyah District، Jeddah 22251, Saudi Arabia",
      },
    ],
  },
  // jazan
  jazan: {
    name: "جازان",
    coords: [16.88917, 42.57083],
    branches: [
      {
        storeName: "كادي مول",
        coords: [16.9091582, 42.5467712],
        address: "WG5W+MP6, Ash Shati, Jazan 82725, Saudi Arabia",
      },
    ],
  },
  // madinah
  madinah: {
    name: "المدينة المنورة",
    coords: [24.4672, 39.6111],
    branches: [
      {
        storeName: "النور مول",
        coords: [24.4961496, 39.5956055],
        address: "King Abdullah Branch Rd, Al'uyun, Madinah 42331",
      },
      {
        storeName: "جراند هايبر",
        coords: [24.4265061, 39.5719472],
        address: "Abu Burayqa، 2569 - حي - 6691, Madinah 42391, Saudi Arabia",
      },
    ],
  },
  // mekkah
  mekkah: {
    name: "مكة المكرمة",
    coords: [21.3891, 39.8579],
    branches: [
      {
        storeName: "مكة مول",
        coords: [21.3910788, 39.8845888],
        address: "King Abdullah Rd, Al Jamiah, Makkah 24246",
      },
      {
        storeName: "السعر المنافس",
        coords: [21.375543, 39.876493],
        address: "Ibrahim Al Khalil, Al Shoqiyah, Makkah 24351, Saudi Arabia",
      },
    ],
  },
  // riyadh
  riyadh: {
    name: "الرياض",
    coords: [24.7136, 46.6753],
    branches: [
      {
        storeName: "السلام مول الرياض",
        coords: [24.558831, 46.637895],
        address: "4419 الطريق الدائري الغربي الفرعي، العوالي، الرياض 14924",
      },
      {
        storeName: "الحمرا مول",
        coords: [24.7740908, 46.7812825],
        address:
          "Al Cheikh Hasan Ibn Hussein Ibn Ali, King Faisal Dt., Riyadh 13215, Saudi Arabia",
      },
    ],
  },
  // taif
  taif: {
    name: "الطائف",
    coords: [21.2703, 40.4158],
    branches: [
      {
        storeName: "جوري مول",
        coords: [21.277086, 40.444686],
        address: "Khalid bin Walid Road, Aljal, Taif 26523, Saudi Arabia",
      },
      {
        storeName: "تيرا مول",
        coords: [21.2789693, 40.4446421],
        address: "شارع الخمسين، القطبية،, Taif 26523،",
      },
    ],
  },
};

const selectedCity = ref(null);
const selectedBranch = ref(null);

// map
let map = null;
let markersLayer = null;

const svgIcon = L.divIcon({
  className: "custom-marker",
  html: `
    <svg width="40" height="40" viewBox="0 0 24 24">
      <defs>
        <mask id="hole">
          <rect width="100%" height="100%" fill="white"/>
          <circle cx="12" cy="9" r="3.5" fill="black"/>
        </mask>
      </defs>

      <path
        d="M12 2C7.6 2 4 5.6 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.4-3.6-8-8-8z"
        fill="#1D683C"
        mask="url(#hole)"
      />
    </svg>
  `,
  iconSize: [50, 50],
  iconAnchor: [16, 32],
});

// init map
onMounted(() => {
  map = L.map("map-container").setView([23.8859, 45.0792], 5);
  markersLayer = L.layerGroup().addTo(map);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; Swift Care Programming Team",
  }).addTo(map);

  showAllBranchesMarkers();
});

// show all branches markers
function showAllBranchesMarkers() {
  markersLayer.clearLayers();

  map.flyTo([23.8859, 45.0792], 5);

  Object.values(cities).forEach((city) => {
    city.branches.forEach((branch) => {
      L.marker(branch.coords, { icon: svgIcon })
        .addTo(markersLayer)
        .bindPopup(branch.storeName);
    });
  });
}

// add city markers
function addCityBranchesMarkers() {
  markersLayer.clearLayers();

  selectedCity.value.branches.forEach((branch) => {
    L.marker(branch.coords, { icon: svgIcon })
      .addTo(markersLayer)
      .bindPopup(branch.storeName);
  });
}

watch(selectedCity, () => {
  if (!selectedBranch.value && selectedCity.value) {
    addCityBranchesMarkers();
    map.flyTo(selectedCity.value.coords, 10);
  }

  if (selectedCity.value === null ) {
    showAllBranchesMarkers();
  }
});

// add branch marker
function addBranchMarker() {
  markersLayer.clearLayers();

  map.flyTo(selectedBranch.value.coords, 15);

  L.marker(selectedBranch.value.coords, { icon: svgIcon })
    .addTo(markersLayer)
    .bindPopup(selectedBranch.value.storeName);
}

watch(selectedBranch, () => {
  if (selectedBranch.value) {
    addBranchMarker();
  }
});

// gsap animations
onMounted(() => {
  // pos animation
  ScrollTrigger.create({
    trigger: "#pos-branches-container",
    start: "top 10%",
    onEnter: () => {
      gsap.to("#branches-container", {
        opacity: 1,
        translateX: 0,
        duration: 2,
        ease: "power2.out",
      });
    },
  });
});
</script>

<template>
  <!-- pos branches -->
  <div
    id="pos-branches-container"
    class="branches w-full h-screen flex justify-content-start align-items-center px-4 lg:px-8 relative z-3"
  >
    <div class="flex flex-wrap md:flex-nowrap gap-3 md:gap-5 align-items-stretch">
      <!-- map -->
      <div
        id="map-container"
        class="map-container flex-shrink-0 relative"
      ></div>
      <!-- branches -->
      <div
        id="branches-container"
        class="branches-container"
        style="opacity: 0; transform: translateX(20px)"
      >
        <!-- title -->
        <h2 class="text-2xl md:text-4xl text-primary text-center md:text-right font-bold arabic-font">
          نقاط البيع (POS)
        </h2>
        <!-- cities buttons -->
        <div v-if="! selectedCity">
          <h4 class="mt-2 md:mt-4">أختر المدينة</h4>
          <div class="mt-2 flex flex-wrap justify-content-center md:justify-content-start gap-2 md:gap-5">
            <div v-for="(city, i) in Object.values(cities)" :key="i">
              <PrimaryButtonComponent
                :title="city.name"
                @click="selectedCity = city"
              />
            </div>
          </div>
        </div>
        <!-- branches buttons -->
        <div v-if="selectedCity">
          <h4
            class="mt-4 text-primary underline cursor-pointer"
            @click="
              () => {
                selectedCity = null;
                selectedBranch = null;
              }
            "
          >
            رجوع للمدينة
          </h4>
          <div class="mt-2 flex flex-wrap justify-content-center md:justify-content-start gap-2 md:gap-5">
            <div v-for="(branch, i) in selectedCity.branches" :key="i">
              <PrimaryButtonComponent
                :title="branch.storeName"
                @click="selectedBranch = branch"
                :selected="branch.storeName === selectedBranch?.storeName"
              />
            </div>
          </div>
        </div>
        <!-- address -->
        <div class="address-container mt-5" v-if="selectedBranch">
          <!-- title -->
          <h3 class="text-2xl text-primary font-bold arabic-font">العنوان</h3>
          <!-- details -->
          <div class="address-details-container arabic-font">
            <p class="mt-2 text-lg">{{ selectedBranch.address }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.map-container {
  height: 500px;
  width: 40vw;
}

@media (max-width: 768px) {
  .map-container {
    width: 100%;
    height: 20rem;
  }
}

</style>
