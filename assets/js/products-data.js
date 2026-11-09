/**
 * WOODLUXE E-Commerce - Product and Blog Canonical Data Store
 * Matches docs/dataset/products.csv and docs/dataset/blog.csv
 */

const CATEGORIES_DATA = [
  { id: 'Chairs', name: 'Ghế', count: 3, image: 'assets/images/accent-chair.jpg', desc: 'Ghế bành, ghế ăn & công thái học' },
  { id: 'Tables', name: 'Bàn', count: 4, image: 'assets/images/dining-table.jpg', desc: 'Bàn ăn, bàn trà & bàn mở rộng' },
  { id: 'Sofas', name: 'Sofa', count: 4, image: 'assets/images/hero-sofa.jpg', desc: 'Sofa góc, văng & bọc da cao cấp' },
  { id: 'Beds', name: 'Giường ngủ', count: 2, image: 'assets/images/platform-bed.jpg', desc: 'Giường ngủ platform & khung nổi' },
  { id: 'Lighting', name: 'Đèn trang trí', count: 4, image: 'assets/images/brass-lamp.jpg', desc: 'Đèn cây, đèn thả trần & đèn tường' },
  { id: 'Decoration', name: 'Đồ trang trí', count: 3, image: 'assets/images/ceramic-vase.jpg', desc: 'Bình gốm Japandi, gương nghệ thuật' }
];

const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Reddington Modular Living Room Sofa",
    sku: "SOFA-RED-01",
    type: "variable",
    category: "Sofas",
    brand: "LuxeStudio",
    regularPrice: 32000000,
    salePrice: 28500000,
    rating: 4.9,
    reviewsCount: 38,
    stockQuantity: 15,
    stockStatus: "instock",
    colors: ["Cream", "Charcoal", "Cognac"],
    sizes: ["Standard (3-Seater)", "Large (4-Seater)", "L-Shape Sectional"],
    variations: [
      {
            "color": "Cream",
            "size": "Standard (3-Seater)",
            "sku": "SOFA-RED-CRM-3S",
            "regularPrice": 32000000,
            "salePrice": 28500000,
            "stockQuantity": 5
      },
      {
            "color": "Cream",
            "size": "Large (4-Seater)",
            "sku": "SOFA-RED-CRM-4S",
            "regularPrice": 36000000,
            "salePrice": 32500000,
            "stockQuantity": 4
      },
      {
            "color": "Cream",
            "size": "L-Shape Sectional",
            "sku": "SOFA-RED-CRM-LSP",
            "regularPrice": 42000000,
            "salePrice": 37500000,
            "stockQuantity": 3
      },
      {
            "color": "Charcoal",
            "size": "Standard (3-Seater)",
            "sku": "SOFA-RED-CHR-3S",
            "regularPrice": 32000000,
            "salePrice": 28500000,
            "stockQuantity": 4
      },
      {
            "color": "Charcoal",
            "size": "Large (4-Seater)",
            "sku": "SOFA-RED-CHR-4S",
            "regularPrice": 36000000,
            "salePrice": 32500000,
            "stockQuantity": 3
      },
      {
            "color": "Charcoal",
            "size": "L-Shape Sectional",
            "sku": "SOFA-RED-CHR-LSP",
            "regularPrice": 42000000,
            "salePrice": 37500000,
            "stockQuantity": 2
      },
      {
            "color": "Cognac",
            "size": "Standard (3-Seater)",
            "sku": "SOFA-RED-COG-3S",
            "regularPrice": 33000000,
            "salePrice": 29500000,
            "stockQuantity": 3
      },
      {
            "color": "Cognac",
            "size": "Large (4-Seater)",
            "sku": "SOFA-RED-COG-4S",
            "regularPrice": 37000000,
            "salePrice": 33500000,
            "stockQuantity": 2
      },
      {
            "color": "Cognac",
            "size": "L-Shape Sectional",
            "sku": "SOFA-RED-COG-LSP",
            "regularPrice": 43000000,
            "salePrice": 38500000,
            "stockQuantity": 1
      }
],
    shortDesc: "Sofa nỉ cao cấp với khung nhôm sơn tĩnh điện và đệm bọt nhớ đàn hồi cao phong cách Ý.",
    desc: "Reddington 6-Piece Modular Sofa là biểu tượng của sự thư thái thượng lưu. Với khung nhôm nguyên khối sơn tĩnh điện màu than chì, đệm mút D40 phủ lông vũ êm ái chống xẹp lún và lớp vải nỉ chống bám bụi nhập khẩu từ Bỉ. Thiết kế thông minh cho phép bạn tự do thay đổi bố cục ghế góc trái, góc phải hoặc tách rời linh hoạt.",
    specs: {
      "Kích thước tiêu chuẩn": "280 x 180 x 85 cm",
      "Khung kết cấu": "Khung nhôm Coated Aluminum + Gỗ thông sấy",
      "Chất liệu bọc": "Vải nỉ Bouclé cao cấp nhập khẩu Bỉ",
      "Bảo hành": "5 năm cho khung, 2 năm cho đệm nỉ"
    },
    image: "assets/images/hero-sofa.jpg",
    badge: "Sale",
    featured: true,
    topSeller: true
  },
  {
    id: 2,
    name: "Aarhus Scandinavian Dining Table",
    sku: "TBL-AAR-02",
    type: "variable",
    category: "Tables",
    brand: "Scandinavian Living",
    regularPrice: 18500000,
    salePrice: null,
    rating: 4.8,
    reviewsCount: 24,
    stockQuantity: 12,
    stockStatus: "instock",
    colors: ["Natural Oak", "Smoked Oak", "Walnut"],
    sizes: ["160x90cm", "180x90cm", "210x100cm"],
    variations: [
      {
            "color": "Natural Oak",
            "size": "160x90cm",
            "sku": "TBL-AAR-02-NAT-160",
            "regularPrice": 16500000,
            "salePrice": null,
            "stockQuantity": 8
      },
      {
            "color": "Natural Oak",
            "size": "180x90cm",
            "sku": "TBL-AAR-02-NAT-180",
            "regularPrice": 18500000,
            "salePrice": null,
            "stockQuantity": 12
      },
      {
            "color": "Natural Oak",
            "size": "210x100cm",
            "sku": "TBL-AAR-02-NAT-210",
            "regularPrice": 23000000,
            "salePrice": null,
            "stockQuantity": 5
      },
      {
            "color": "Smoked Oak",
            "size": "160x90cm",
            "sku": "TBL-AAR-02-SMO-160",
            "regularPrice": 17500000,
            "salePrice": null,
            "stockQuantity": 7
      },
      {
            "color": "Smoked Oak",
            "size": "180x90cm",
            "sku": "TBL-AAR-02-SMO-180",
            "regularPrice": 19500000,
            "salePrice": null,
            "stockQuantity": 10
      },
      {
            "color": "Smoked Oak",
            "size": "210x100cm",
            "sku": "TBL-AAR-02-SMO-210",
            "regularPrice": 24000000,
            "salePrice": null,
            "stockQuantity": 4
      },
      {
            "color": "Walnut",
            "size": "160x90cm",
            "sku": "TBL-AAR-02-WAL-160",
            "regularPrice": 18000000,
            "salePrice": null,
            "stockQuantity": 6
      },
      {
            "color": "Walnut",
            "size": "180x90cm",
            "sku": "TBL-AAR-02-WAL-180",
            "regularPrice": 20000000,
            "salePrice": null,
            "stockQuantity": 8
      },
      {
            "color": "Walnut",
            "size": "210x100cm",
            "sku": "TBL-AAR-02-WAL-210",
            "regularPrice": 25000000,
            "salePrice": null,
            "stockQuantity": 3
      }
],
    shortDesc: "Bàn ăn gỗ sồi tự nhiên Bắc Âu với xử lý chống trầy và chống ẩm công nghệ cao.",
    desc: "Bàn ăn Aarhus được chế tác từ 100% gỗ sồi trắng châu Âu được tuyển chọn kỹ lưỡng. Từng đường vát cạnh bo tròn tinh xảo tạo cảm giác nhẹ nhàng, an toàn cho trẻ nhỏ. Lớp sơn dầu thực vật tự nhiên Osmo của Đức giữ nguyên xúc cảm vân gỗ sống động.",
    specs: {
      "Kích thước": "180 x 90 x 75 cm",
      "Vật liệu": "Gỗ sồi trắng châu Âu (FSC Certified)",
      "Sức chứa": "6 - 8 người ngồi thoải mái",
      "Bảo hành": "3 năm"
    },
    image: "assets/images/dining-table.jpg",
    badge: "New",
    featured: true,
    topSeller: false
  },
  {
    id: 3,
    name: "Bergen Ergonomic Lounge Armchair",
    sku: "CHR-BER-03",
    type: "sale",
    category: "Chairs",
    brand: "ArtisanHome",
    regularPrice: 12500000,
    salePrice: 8900000,
    rating: 4.9,
    reviewsCount: 52,
    stockQuantity: 8,
    stockStatus: "instock",
    colors: ["Caramel Tan", "Espresso", "Forest Green"],
    sizes: ["Standard", "With Ottoman"],
    variations: [
      {
            "color": "Caramel Tan",
            "size": "Standard",
            "sku": "CHR-BER-03-CAR-STD",
            "regularPrice": 12500000,
            "salePrice": 8900000,
            "stockQuantity": 5
      },
      {
            "color": "Caramel Tan",
            "size": "With Ottoman",
            "sku": "CHR-BER-03-CAR-OTM",
            "regularPrice": 16500000,
            "salePrice": 12900000,
            "stockQuantity": 3
      },
      {
            "color": "Espresso",
            "size": "Standard",
            "sku": "CHR-BER-03-ESP-STD",
            "regularPrice": 12500000,
            "salePrice": 8900000,
            "stockQuantity": 4
      },
      {
            "color": "Espresso",
            "size": "With Ottoman",
            "sku": "CHR-BER-03-ESP-OTM",
            "regularPrice": 16500000,
            "salePrice": 12900000,
            "stockQuantity": 2
      },
      {
            "color": "Forest Green",
            "size": "Standard",
            "sku": "CHR-BER-03-GRN-STD",
            "regularPrice": 12500000,
            "salePrice": 8900000,
            "stockQuantity": 3
      },
      {
            "color": "Forest Green",
            "size": "With Ottoman",
            "sku": "CHR-BER-03-GRN-OTM",
            "regularPrice": 16500000,
            "salePrice": 12900000,
            "stockQuantity": 2
      }
],
    shortDesc: "Ghế thư giãn da bò thủ công với khung gỗ óc chó nguyên khối dáng công thái học.",
    desc: "Chiếc ghế Bergen Armchair mang lại trải nghiệm nâng niu cột sống hoàn hảo sau ngày dài làm việc. Góc tựa nghiêng 105 độ chuẩn sinh học kết hợp lớp da bò Semi-Aniline mềm mại, mịn màng theo thời gian.",
    specs: {
      "Kích thước": "82 x 88 x 85 cm",
      "Khung sườn": "Gỗ óc chó đen Bắc Mỹ (American Walnut)",
      "Chất liệu da": "Da bò tự nhiên thuộc thảo mộc nhập khẩu Ý",
      "Bảo hành": "3 năm"
    },
    image: "assets/images/accent-chair.jpg",
    badge: "-29%",
    featured: true,
    topSeller: true
  },
  {
    id: 4,
    name: "Koppar Brass Arc Floor Lamp",
    sku: "LGT-KOP-04",
    type: "variable",
    category: "Lighting",
    brand: "NordicCraft",
    regularPrice: 6800000,
    salePrice: 5440000,
    rating: 4.7,
    reviewsCount: 19,
    stockQuantity: 20,
    stockStatus: "instock",
    colors: ["Brushed Brass", "Matte Black", "Chrome"],
    sizes: ["180cm Height", "210cm Height"],
    variations: [
      {
            "color": "Brushed Brass",
            "size": "180cm Height",
            "sku": "LGT-KOP-04-BRS-180",
            "regularPrice": 6800000,
            "salePrice": 5440000,
            "stockQuantity": 10
      },
      {
            "color": "Brushed Brass",
            "size": "210cm Height",
            "sku": "LGT-KOP-04-BRS-210",
            "regularPrice": 7800000,
            "salePrice": 6240000,
            "stockQuantity": 6
      },
      {
            "color": "Matte Black",
            "size": "180cm Height",
            "sku": "LGT-KOP-04-BLK-180",
            "regularPrice": 6500000,
            "salePrice": 5200000,
            "stockQuantity": 8
      },
      {
            "color": "Matte Black",
            "size": "210cm Height",
            "sku": "LGT-KOP-04-BLK-210",
            "regularPrice": 7500000,
            "salePrice": 6000000,
            "stockQuantity": 5
      },
      {
            "color": "Chrome",
            "size": "180cm Height",
            "sku": "LGT-KOP-04-CHM-180",
            "regularPrice": 6600000,
            "salePrice": 5280000,
            "stockQuantity": 6
      },
      {
            "color": "Chrome",
            "size": "210cm Height",
            "sku": "LGT-KOP-04-CHM-210",
            "regularPrice": 7600000,
            "salePrice": 6080000,
            "stockQuantity": 4
      }
],
    shortDesc: "Đèn cây vòm cong chao thủy tinh khói phong cách nghệ thuật đương đại.",
    desc: "Đèn cây Koppar tạo nên điểm nhấn kiến trúc ấn tượng cho không gian phòng khách hoặc góc đọc sách. Thân đèn uốn cong duyên dáng bằng đồng thau chải xước phối cùng chao thủy tinh thổi thủ công tạo luồng ánh sáng ấm áp, dịu mắt.",
    specs: {
      "Chiều cao": "Vòm 180 - 210 cm",
      "Chất liệu": "Đồng thau nguyên chất + Thủy tinh Borosilicate",
      "Đui đèn": "E27 (Kèm bóng LED Edison 3000K)",
      "Bảo hành": "2 năm"
    },
    image: "assets/images/brass-lamp.jpg",
    badge: "-20%",
    featured: false,
    topSeller: true
  },
  {
    id: 5,
    name: "Oslo Minimalist Platform King Bed",
    sku: "BED-OSL-05",
    type: "variable",
    category: "Beds",
    brand: "LuxeStudio",
    regularPrice: 26000000,
    salePrice: null,
    rating: 4.9,
    reviewsCount: 15,
    stockQuantity: 6,
    stockStatus: "instock",
    colors: ["Oatmeal Beige", "Slate Grey", "Warm Cream"],
    sizes: ["Queen (160x200)", "King (180x200)", "Super King (200x220)"],
    variations: [
      {
            "color": "Oatmeal Beige",
            "size": "Queen (160x200)",
            "sku": "BED-OSL-05-BEI-QEN",
            "regularPrice": 24000000,
            "salePrice": null,
            "stockQuantity": 4
      },
      {
            "color": "Oatmeal Beige",
            "size": "King (180x200)",
            "sku": "BED-OSL-05-BEI-KNG",
            "regularPrice": 26000000,
            "salePrice": null,
            "stockQuantity": 6
      },
      {
            "color": "Oatmeal Beige",
            "size": "Super King (200x220)",
            "sku": "BED-OSL-05-BEI-SKN",
            "regularPrice": 29500000,
            "salePrice": null,
            "stockQuantity": 3
      },
      {
            "color": "Slate Grey",
            "size": "Queen (160x200)",
            "sku": "BED-OSL-05-GRY-QEN",
            "regularPrice": 24000000,
            "salePrice": null,
            "stockQuantity": 3
      },
      {
            "color": "Slate Grey",
            "size": "King (180x200)",
            "sku": "BED-OSL-05-GRY-KNG",
            "regularPrice": 26000000,
            "salePrice": null,
            "stockQuantity": 5
      },
      {
            "color": "Slate Grey",
            "size": "Super King (200x220)",
            "sku": "BED-OSL-05-GRY-SKN",
            "regularPrice": 29500000,
            "salePrice": null,
            "stockQuantity": 2
      },
      {
            "color": "Warm Cream",
            "size": "Queen (160x200)",
            "sku": "BED-OSL-05-CRM-QEN",
            "regularPrice": 24000000,
            "salePrice": null,
            "stockQuantity": 4
      },
      {
            "color": "Warm Cream",
            "size": "King (180x200)",
            "sku": "BED-OSL-05-CRM-KNG",
            "regularPrice": 26000000,
            "salePrice": null,
            "stockQuantity": 4
      },
      {
            "color": "Warm Cream",
            "size": "Super King (200x220)",
            "sku": "BED-OSL-05-CRM-SKN",
            "regularPrice": 29500000,
            "salePrice": null,
            "stockQuantity": 2
      }
],
    shortDesc: "Giường ngủ bọc vải bouclé dệt sợi tự nhiên với khung chân gỗ tần bì kiên cố.",
    desc: "Thiết kế hạ thấp phong cách Nhật - Bắc Âu (Japandi) mang lại cảm giác tĩnh tại, an yên cho phòng ngủ. Tựa đầu giường đệm dày êm ái thích hợp để tựa lưng đọc sách mỗi tối.",
    specs: {
      "Kích thước lòng nệm": "180 x 200 cm",
      "Khung chịu lực": "Gỗ tần bì Ash tự nhiên dát phản chịu tải 600kg",
      "Vải bọc": "Bouclé dệt mật độ cao chống xù lông",
      "Bảo hành": "5 năm"
    },
    image: "assets/images/platform-bed.jpg",
    badge: "Hot",
    featured: true,
    topSeller: true
  },
  {
    id: 6,
    name: "Kyoto Textured Ceramic Vase Trio",
    sku: "DEC-KYO-06",
    type: "simple",
    category: "Decoration",
    brand: "ArtisanHome",
    regularPrice: 2400000,
    salePrice: null,
    rating: 4.6,
    reviewsCount: 42,
    stockQuantity: 35,
    stockStatus: "instock",
    colors: ["Earthy Terracotta", "Basalt Grey", "Sand White"],
    sizes: ["Set 3 Bình Mini (15-20cm)", "Set 3 Bình Tiêu Chuẩn (25-35cm)", "Set 3 Bình Đại Sảnh (40-50cm)"],
    variations: [
      {
            "color": "Earthy Terracotta",
            "size": "Set 3 Bình Mini (15-20cm)",
            "sku": "DEC-KYO-06-TER-SML",
            "regularPrice": 1800000,
            "salePrice": null,
            "stockQuantity": 15
      },
      {
            "color": "Earthy Terracotta",
            "size": "Set 3 Bình Tiêu Chuẩn (25-35cm)",
            "sku": "DEC-KYO-06-TER-MED",
            "regularPrice": 2400000,
            "salePrice": null,
            "stockQuantity": 20
      },
      {
            "color": "Earthy Terracotta",
            "size": "Set 3 Bình Đại Sảnh (40-50cm)",
            "sku": "DEC-KYO-06-TER-LRG",
            "regularPrice": 3600000,
            "salePrice": null,
            "stockQuantity": 8
      },
      {
            "color": "Basalt Grey",
            "size": "Set 3 Bình Mini (15-20cm)",
            "sku": "DEC-KYO-06-GRY-SML",
            "regularPrice": 1800000,
            "salePrice": null,
            "stockQuantity": 12
      },
      {
            "color": "Basalt Grey",
            "size": "Set 3 Bình Tiêu Chuẩn (25-35cm)",
            "sku": "DEC-KYO-06-GRY-MED",
            "regularPrice": 2400000,
            "salePrice": null,
            "stockQuantity": 16
      },
      {
            "color": "Basalt Grey",
            "size": "Set 3 Bình Đại Sảnh (40-50cm)",
            "sku": "DEC-KYO-06-GRY-LRG",
            "regularPrice": 3600000,
            "salePrice": null,
            "stockQuantity": 6
      },
      {
            "color": "Sand White",
            "size": "Set 3 Bình Mini (15-20cm)",
            "sku": "DEC-KYO-06-WHT-SML",
            "regularPrice": 1800000,
            "salePrice": null,
            "stockQuantity": 10
      },
      {
            "color": "Sand White",
            "size": "Set 3 Bình Tiêu Chuẩn (25-35cm)",
            "sku": "DEC-KYO-06-WHT-MED",
            "regularPrice": 2400000,
            "salePrice": null,
            "stockQuantity": 14
      },
      {
            "color": "Sand White",
            "size": "Set 3 Bình Đại Sảnh (40-50cm)",
            "sku": "DEC-KYO-06-WHT-LRG",
            "regularPrice": 3600000,
            "salePrice": null,
            "stockQuantity": 5
      }
],
    shortDesc: "Bộ 3 bình gốm thô thủ công tráng men mờ phong cách Japandi thanh nhã.",
    desc: "Được nung thủ công ở nhiệt độ 1280°C, bề mặt bình giữ trọn vẹn chất liệu cát mịn tự nhiên. Bộ 3 dáng bình cao thấp tạo thành nhịp điệu sinh động khi cắm cành hoa khô hoặc đặt trang trí trên kệ tủ.",
    specs: {
      "Số lượng": "3 bình kích thước 15cm, 22cm và 28cm",
      "Chất liệu": "Gốm cao lanh tự nhiên phủ men nhám mờ",
      "Xuất xứ": "Làng nghề gốm thủ công nghệ thuật"
    },
    image: "assets/images/ceramic-vase.jpg",
    badge: null,
    featured: false,
    topSeller: false
  },
  {
    id: 7,
    name: "Stockholm Velvet Accent Chair",
    sku: "CHR-STK-07",
    type: "variable",
    category: "Chairs",
    brand: "Scandinavian Living",
    regularPrice: 7200000,
    salePrice: 6480000,
    rating: 4.8,
    reviewsCount: 16,
    stockQuantity: 18,
    stockStatus: "instock",
    colors: ["Emerald Green", "Midnight Blue", "Dusty Rose"],
    sizes: ["Chân Cố Định (Standard)", "Chân Xoay 360° (Swivel)", "Kèm Gối Lông Vũ (Deluxe)"],
    variations: [
      {
            "color": "Emerald Green",
            "size": "Chân Cố Định (Standard)",
            "sku": "CHR-STK-07-EMR-STD",
            "regularPrice": 7200000,
            "salePrice": 6480000,
            "stockQuantity": 8
      },
      {
            "color": "Emerald Green",
            "size": "Chân Xoay 360° (Swivel)",
            "sku": "CHR-STK-07-EMR-SWV",
            "regularPrice": 8200000,
            "salePrice": 7380000,
            "stockQuantity": 6
      },
      {
            "color": "Emerald Green",
            "size": "Kèm Gối Lông Vũ (Deluxe)",
            "sku": "CHR-STK-07-EMR-DLX",
            "regularPrice": 8900000,
            "salePrice": 8000000,
            "stockQuantity": 4
      },
      {
            "color": "Midnight Blue",
            "size": "Chân Cố Định (Standard)",
            "sku": "CHR-STK-07-BLU-STD",
            "regularPrice": 7200000,
            "salePrice": 6480000,
            "stockQuantity": 7
      },
      {
            "color": "Midnight Blue",
            "size": "Chân Xoay 360° (Swivel)",
            "sku": "CHR-STK-07-BLU-SWV",
            "regularPrice": 8200000,
            "salePrice": 7380000,
            "stockQuantity": 5
      },
      {
            "color": "Midnight Blue",
            "size": "Kèm Gối Lông Vũ (Deluxe)",
            "sku": "CHR-STK-07-BLU-DLX",
            "regularPrice": 8900000,
            "salePrice": 8000000,
            "stockQuantity": 3
      },
      {
            "color": "Dusty Rose",
            "size": "Chân Cố Định (Standard)",
            "sku": "CHR-STK-07-ROS-STD",
            "regularPrice": 7200000,
            "salePrice": 6480000,
            "stockQuantity": 6
      },
      {
            "color": "Dusty Rose",
            "size": "Chân Xoay 360° (Swivel)",
            "sku": "CHR-STK-07-ROS-SWV",
            "regularPrice": 8200000,
            "salePrice": 7380000,
            "stockQuantity": 4
      },
      {
            "color": "Dusty Rose",
            "size": "Kèm Gối Lông Vũ (Deluxe)",
            "sku": "CHR-STK-07-ROS-DLX",
            "regularPrice": 8900000,
            "salePrice": 8000000,
            "stockQuantity": 3
      }
],
    shortDesc: "Ghế bành nhung sang trọng chân kim loại mạ vàng chải tia nổi bật.",
    desc: "Mẫu ghế mang phong cách Mid-Century Modern quý phái, bọc nhung nhung tuyết cao cấp bóng bẩy theo từng chuyển động ánh sáng trong phòng khách.",
    specs: {
      "Kích thước": "75 x 72 x 80 cm",
      "Chất liệu": "Vải nhung tuyết cao cấp + Chân thép mạ vàng PVD",
      "Bảo hành": "2 năm"
    },
    image: "assets/images/accent-chair.jpg",
    badge: "-10%",
    featured: false,
    topSeller: true
  },
  {
    id: 8,
    name: "Malmo Solid Oak Coffee Table",
    sku: "TBL-MLM-08",
    type: "simple",
    category: "Tables",
    brand: "WoodWood",
    regularPrice: 8900000,
    salePrice: null,
    rating: 4.7,
    reviewsCount: 14,
    stockQuantity: 14,
    stockStatus: "instock",
    colors: ["Natural Oak", "Smoked Oak", "Walnut"],
    sizes: ["Đường kính 60cm", "Đường kính 80cm", "Đường kính 100cm"],
    variations: [
      {
            "color": "Natural Oak",
            "size": "Đường kính 60cm",
            "sku": "TBL-MLM-08-NOK-D60",
            "regularPrice": 6900000,
            "salePrice": null,
            "stockQuantity": 8
      },
      {
            "color": "Natural Oak",
            "size": "Đường kính 80cm",
            "sku": "TBL-MLM-08-NOK-D80",
            "regularPrice": 8900000,
            "salePrice": null,
            "stockQuantity": 10
      },
      {
            "color": "Natural Oak",
            "size": "Đường kính 100cm",
            "sku": "TBL-MLM-08-NOK-D100",
            "regularPrice": 11500000,
            "salePrice": null,
            "stockQuantity": 5
      },
      {
            "color": "Smoked Oak",
            "size": "Đường kính 60cm",
            "sku": "TBL-MLM-08-SOK-D60",
            "regularPrice": 7200000,
            "salePrice": null,
            "stockQuantity": 6
      },
      {
            "color": "Smoked Oak",
            "size": "Đường kính 80cm",
            "sku": "TBL-MLM-08-SOK-D80",
            "regularPrice": 9400000,
            "salePrice": null,
            "stockQuantity": 8
      },
      {
            "color": "Smoked Oak",
            "size": "Đường kính 100cm",
            "sku": "TBL-MLM-08-SOK-D100",
            "regularPrice": 12000000,
            "salePrice": null,
            "stockQuantity": 4
      },
      {
            "color": "Walnut",
            "size": "Đường kính 60cm",
            "sku": "TBL-MLM-08-WAL-D60",
            "regularPrice": 7500000,
            "salePrice": null,
            "stockQuantity": 5
      },
      {
            "color": "Walnut",
            "size": "Đường kính 80cm",
            "sku": "TBL-MLM-08-WAL-D80",
            "regularPrice": 9900000,
            "salePrice": null,
            "stockQuantity": 7
      },
      {
            "color": "Walnut",
            "size": "Đường kính 100cm",
            "sku": "TBL-MLM-08-WAL-D100",
            "regularPrice": 12800000,
            "salePrice": null,
            "stockQuantity": 3
      }
],
    shortDesc: "Bàn trà phòng khách tròn gỗ sồi tự nhiên với cạnh vát tinh tế.",
    desc: "Thiết kế mặt bàn tròn đường kính 80cm tạo luồng di chuyển thuận lợi quanh sofa. Chân bàn trụ ba chân vững chãi chịu lực tối đa.",
    specs: {
      "Đường kính": "80 cm, Chiều cao 42 cm",
      "Vật liệu": "100% Gỗ sồi trắng tự nhiên",
      "Bảo hành": "2 năm"
    },
    image: "assets/images/dining-table.jpg",
    badge: null,
    featured: false,
    topSeller: false
  },
  {
    id: 9,
    name: "Copenhagen 3-Seater Leather Sofa",
    sku: "SOFA-CPH-09",
    type: "variable",
    category: "Sofas",
    brand: "LuxeStudio",
    regularPrice: 38000000,
    salePrice: null,
    rating: 5.0,
    reviewsCount: 29,
    stockQuantity: 5,
    stockStatus: "instock",
    colors: ["Cognac Brown", "Black Onyx", "Classic Navy"],
    sizes: ["Văng 2 Chỗ (180cm)", "Văng 3 Chỗ (220cm)", "Văng 4 Chỗ (260cm)"],
    variations: [
      {
            "color": "Cognac Brown",
            "size": "Văng 2 Chỗ (180cm)",
            "sku": "SOFA-CPH-09-COG-180",
            "regularPrice": 32000000,
            "salePrice": null,
            "stockQuantity": 3
      },
      {
            "color": "Cognac Brown",
            "size": "Văng 3 Chỗ (220cm)",
            "sku": "SOFA-CPH-09-COG-220",
            "regularPrice": 38000000,
            "salePrice": null,
            "stockQuantity": 5
      },
      {
            "color": "Cognac Brown",
            "size": "Văng 4 Chỗ (260cm)",
            "sku": "SOFA-CPH-09-COG-260",
            "regularPrice": 45000000,
            "salePrice": null,
            "stockQuantity": 2
      },
      {
            "color": "Black Onyx",
            "size": "Văng 2 Chỗ (180cm)",
            "sku": "SOFA-CPH-09-BLK-180",
            "regularPrice": 32000000,
            "salePrice": null,
            "stockQuantity": 2
      },
      {
            "color": "Black Onyx",
            "size": "Văng 3 Chỗ (220cm)",
            "sku": "SOFA-CPH-09-BLK-220",
            "regularPrice": 38000000,
            "salePrice": null,
            "stockQuantity": 4
      },
      {
            "color": "Black Onyx",
            "size": "Văng 4 Chỗ (260cm)",
            "sku": "SOFA-CPH-09-BLK-260",
            "regularPrice": 45000000,
            "salePrice": null,
            "stockQuantity": 1
      },
      {
            "color": "Classic Navy",
            "size": "Văng 2 Chỗ (180cm)",
            "sku": "SOFA-CPH-09-NAV-180",
            "regularPrice": 32000000,
            "salePrice": null,
            "stockQuantity": 2
      },
      {
            "color": "Classic Navy",
            "size": "Văng 3 Chỗ (220cm)",
            "sku": "SOFA-CPH-09-NAV-220",
            "regularPrice": 38000000,
            "salePrice": null,
            "stockQuantity": 3
      },
      {
            "color": "Classic Navy",
            "size": "Văng 4 Chỗ (260cm)",
            "sku": "SOFA-CPH-09-NAV-260",
            "regularPrice": 45000000,
            "salePrice": null,
            "stockQuantity": 1
      }
],
    shortDesc: "Sofa văng da thật nhập khẩu Ý với đường may tay thủ công.",
    desc: "Copenhagen Leather Sofa là định nghĩa của sự xa hoa thầm lặng. Da bò nguyên tấm nhập khẩu trực tiếp từ vùng Tuscany, Ý cho cảm giác êm ái, mát lạnh mùa hè và ấm áp mùa đông.",
    specs: {
      "Kích thước": "220 x 95 x 82 cm",
      "Chất liệu da": "Da bò tự nhiên Full Grain Italy",
      "Khung": "Gỗ dẻ gai châu Âu (European Beech)",
      "Bảo hành": "7 năm"
    },
    image: "assets/images/hero-sofa.jpg",
    badge: "Premium",
    featured: true,
    topSeller: false
  },
  {
    id: 10,
    name: "Helsinki Oak Floating Bed Frame",
    sku: "BED-HEL-10",
    type: "simple",
    category: "Beds",
    brand: "Scandinavian Living",
    regularPrice: 22000000,
    salePrice: null,
    rating: 4.8,
    reviewsCount: 11,
    stockQuantity: 9,
    stockStatus: "instock",
    colors: ["Light Oak", "Natural Walnut", "Smoked Ash"],
    sizes: ["Queen (160x200)", "King (180x200)", "Super King (200x220)"],
    variations: [
      {
            "color": "Light Oak",
            "size": "Queen (160x200)",
            "sku": "BED-HEL-10-LOK-QEN",
            "regularPrice": 20000000,
            "salePrice": null,
            "stockQuantity": 5
      },
      {
            "color": "Light Oak",
            "size": "King (180x200)",
            "sku": "BED-HEL-10-LOK-KNG",
            "regularPrice": 22000000,
            "salePrice": null,
            "stockQuantity": 7
      },
      {
            "color": "Light Oak",
            "size": "Super King (200x220)",
            "sku": "BED-HEL-10-LOK-SKN",
            "regularPrice": 25500000,
            "salePrice": null,
            "stockQuantity": 3
      },
      {
            "color": "Natural Walnut",
            "size": "Queen (160x200)",
            "sku": "BED-HEL-10-WAL-QEN",
            "regularPrice": 21500000,
            "salePrice": null,
            "stockQuantity": 4
      },
      {
            "color": "Natural Walnut",
            "size": "King (180x200)",
            "sku": "BED-HEL-10-WAL-KNG",
            "regularPrice": 23500000,
            "salePrice": null,
            "stockQuantity": 5
      },
      {
            "color": "Natural Walnut",
            "size": "Super King (200x220)",
            "sku": "BED-HEL-10-WAL-SKN",
            "regularPrice": 27000000,
            "salePrice": null,
            "stockQuantity": 2
      },
      {
            "color": "Smoked Ash",
            "size": "Queen (160x200)",
            "sku": "BED-HEL-10-ASH-QEN",
            "regularPrice": 20500000,
            "salePrice": null,
            "stockQuantity": 3
      },
      {
            "color": "Smoked Ash",
            "size": "King (180x200)",
            "sku": "BED-HEL-10-ASH-KNG",
            "regularPrice": 22500000,
            "salePrice": null,
            "stockQuantity": 4
      },
      {
            "color": "Smoked Ash",
            "size": "Super King (200x220)",
            "sku": "BED-HEL-10-ASH-SKN",
            "regularPrice": 26000000,
            "salePrice": null,
            "stockQuantity": 2
      }
],
    shortDesc: "Khung giường treo cảm giác bay nhẹ nhàng tích hợp đèn LED hắt gầm.",
    desc: "Khung chân giấu âm tạo hiệu ứng thị giác như chiếc giường đang lơ lửng bồng bềnh trong không trung. Tích hợp thanh nhôm tản nhiệt dải LED 2700K tạo ánh sáng thư thái ban đêm.",
    specs: {
      "Kích thước": "190 x 215 x 90 cm",
      "Hệ thống LED": "LED 2700K Warm White kèm cảm biến",
      "Bảo hành": "3 năm"
    },
    image: "assets/images/platform-bed.jpg",
    badge: null,
    featured: false,
    topSeller: false
  },
  {
    id: 11,
    name: "Nordic Geometric Ceramic Planter",
    sku: "DEC-PLN-11",
    type: "simple",
    category: "Decoration",
    brand: "ArtisanHome",
    regularPrice: 1200000,
    salePrice: null,
    rating: 4.5,
    reviewsCount: 30,
    stockQuantity: 40,
    stockStatus: "instock",
    colors: ["Sand White", "Basalt Grey", "Terracotta"],
    sizes: ["Size S (Cao 18cm)", "Size M (Cao 25cm)", "Size L (Cao 35cm)"],
    variations: [
      {
            "color": "Sand White",
            "size": "Size S (Cao 18cm)",
            "sku": "DEC-PLN-11-WHT-SML",
            "regularPrice": 850000,
            "salePrice": null,
            "stockQuantity": 20
      },
      {
            "color": "Sand White",
            "size": "Size M (Cao 25cm)",
            "sku": "DEC-PLN-11-WHT-MED",
            "regularPrice": 1200000,
            "salePrice": null,
            "stockQuantity": 25
      },
      {
            "color": "Sand White",
            "size": "Size L (Cao 35cm)",
            "sku": "DEC-PLN-11-WHT-LRG",
            "regularPrice": 1800000,
            "salePrice": null,
            "stockQuantity": 15
      },
      {
            "color": "Basalt Grey",
            "size": "Size S (Cao 18cm)",
            "sku": "DEC-PLN-11-GRY-SML",
            "regularPrice": 850000,
            "salePrice": null,
            "stockQuantity": 18
      },
      {
            "color": "Basalt Grey",
            "size": "Size M (Cao 25cm)",
            "sku": "DEC-PLN-11-GRY-MED",
            "regularPrice": 1200000,
            "salePrice": null,
            "stockQuantity": 22
      },
      {
            "color": "Basalt Grey",
            "size": "Size L (Cao 35cm)",
            "sku": "DEC-PLN-11-GRY-LRG",
            "regularPrice": 1800000,
            "salePrice": null,
            "stockQuantity": 12
      },
      {
            "color": "Terracotta",
            "size": "Size S (Cao 18cm)",
            "sku": "DEC-PLN-11-TER-SML",
            "regularPrice": 850000,
            "salePrice": null,
            "stockQuantity": 15
      },
      {
            "color": "Terracotta",
            "size": "Size M (Cao 25cm)",
            "sku": "DEC-PLN-11-TER-MED",
            "regularPrice": 1200000,
            "salePrice": null,
            "stockQuantity": 18
      },
      {
            "color": "Terracotta",
            "size": "Size L (Cao 35cm)",
            "sku": "DEC-PLN-11-TER-LRG",
            "regularPrice": 1800000,
            "salePrice": null,
            "stockQuantity": 10
      }
],
    shortDesc: "Chậu cây gốm hoa văn hình học tối giản tôn vinh không gian xanh trong nhà.",
    desc: "Chậu trồng cây cảnh trong nhà với lỗ thoát nước thông minh kèm đĩa hứng men bóng đồng điệu, giữ căn phòng luôn sạch sẽ.",
    specs: {
      "Kích thước": "Đường kính 25cm, cao 28cm",
      "Chất liệu": "Gốm tráng men mờ không phai màu"
    },
    image: "assets/images/ceramic-vase.jpg",
    badge: null,
    featured: false,
    topSeller: false
  },
  {
    id: 12,
    name: "Aura Amber Glass Pendant Light",
    sku: "LGT-AUR-12",
    type: "variable",
    category: "Lighting",
    brand: "NordicCraft",
    regularPrice: 3500000,
    salePrice: null,
    rating: 4.6,
    reviewsCount: 22,
    stockQuantity: 25,
    stockStatus: "instock",
    colors: ["Amber Glow", "Smoke Grey", "Clear Crystal"],
    sizes: ["Đèn Đơn (Single)", "Bộ 3 Đèn Thả (Cluster 3-Drop)", "Bộ 5 Đèn Chùm (Cluster 5-Drop)"],
    variations: [
      {
            "color": "Amber Glow",
            "size": "Đèn Đơn (Single)",
            "sku": "LGT-AUR-12-AMB-SGL",
            "regularPrice": 3500000,
            "salePrice": null,
            "stockQuantity": 15
      },
      {
            "color": "Amber Glow",
            "size": "Bộ 3 Đèn Thả (Cluster 3-Drop)",
            "sku": "LGT-AUR-12-AMB-CL3",
            "regularPrice": 7500000,
            "salePrice": null,
            "stockQuantity": 8
      },
      {
            "color": "Amber Glow",
            "size": "Bộ 5 Đèn Chùm (Cluster 5-Drop)",
            "sku": "LGT-AUR-12-AMB-CL5",
            "regularPrice": 11500000,
            "salePrice": null,
            "stockQuantity": 4
      },
      {
            "color": "Smoke Grey",
            "size": "Đèn Đơn (Single)",
            "sku": "LGT-AUR-12-SMK-SGL",
            "regularPrice": 3500000,
            "salePrice": null,
            "stockQuantity": 12
      },
      {
            "color": "Smoke Grey",
            "size": "Bộ 3 Đèn Thả (Cluster 3-Drop)",
            "sku": "LGT-AUR-12-SMK-CL3",
            "regularPrice": 7500000,
            "salePrice": null,
            "stockQuantity": 6
      },
      {
            "color": "Smoke Grey",
            "size": "Bộ 5 Đèn Chùm (Cluster 5-Drop)",
            "sku": "LGT-AUR-12-SMK-CL5",
            "regularPrice": 11500000,
            "salePrice": null,
            "stockQuantity": 3
      },
      {
            "color": "Clear Crystal",
            "size": "Đèn Đơn (Single)",
            "sku": "LGT-AUR-12-CRY-SGL",
            "regularPrice": 3500000,
            "salePrice": null,
            "stockQuantity": 10
      },
      {
            "color": "Clear Crystal",
            "size": "Bộ 3 Đèn Thả (Cluster 3-Drop)",
            "sku": "LGT-AUR-12-CRY-CL3",
            "regularPrice": 7500000,
            "salePrice": null,
            "stockQuantity": 5
      },
      {
            "color": "Clear Crystal",
            "size": "Bộ 5 Đèn Chùm (Cluster 5-Drop)",
            "sku": "LGT-AUR-12-CRY-CL5",
            "regularPrice": 11500000,
            "salePrice": null,
            "stockQuantity": 2
      }
],
    shortDesc: "Đèn thả trần thủy tinh thổi thủ công tạo ánh sáng vàng ấm cúng.",
    desc: "Treo đơn độc trên bàn trà hoặc treo thành cụm 3 giọt trên đảo bếp, đèn Aura mang đến sự lãng mạn tinh tế cho bữa tối gia đình.",
    specs: {
      "Chất liệu": "Thủy tinh màu thổi tay + Dây thả bọc dù cao cấp",
      "Bảo hành": "2 năm"
    },
    image: "assets/images/brass-lamp.jpg",
    badge: "New",
    featured: false,
    topSeller: false
  },
  {
    id: 13,
    name: "Geneva Ergonomic Mesh Office Chair",
    sku: "CHR-GNV-13",
    type: "simple",
    category: "Chairs",
    brand: "WoodWood",
    regularPrice: 5800000,
    salePrice: 4900000,
    rating: 4.8,
    reviewsCount: 37,
    stockQuantity: 22,
    stockStatus: "instock",
    colors: ["Space Grey", "Midnight Black", "Platinum White"],
    sizes: ["Bản Tiêu Chuẩn (Standard)", "Kèm Kê Chân Thư Giãn (Footrest Pro)", "Bản Tựa Đầu 3D & Kê Chân (Full Option)"],
    variations: [
      {
            "color": "Space Grey",
            "size": "Bản Tiêu Chuẩn (Standard)",
            "sku": "CHR-GNV-13-GRY-STD",
            "regularPrice": 5800000,
            "salePrice": 4900000,
            "stockQuantity": 12
      },
      {
            "color": "Space Grey",
            "size": "Kèm Kê Chân Thư Giãn (Footrest Pro)",
            "sku": "CHR-GNV-13-GRY-FTR",
            "regularPrice": 6800000,
            "salePrice": 5750000,
            "stockQuantity": 8
      },
      {
            "color": "Space Grey",
            "size": "Bản Tựa Đầu 3D & Kê Chân (Full Option)",
            "sku": "CHR-GNV-13-GRY-FUL",
            "regularPrice": 7800000,
            "salePrice": 6600000,
            "stockQuantity": 5
      },
      {
            "color": "Midnight Black",
            "size": "Bản Tiêu Chuẩn (Standard)",
            "sku": "CHR-GNV-13-BLK-STD",
            "regularPrice": 5800000,
            "salePrice": 4900000,
            "stockQuantity": 10
      },
      {
            "color": "Midnight Black",
            "size": "Kèm Kê Chân Thư Giãn (Footrest Pro)",
            "sku": "CHR-GNV-13-BLK-FTR",
            "regularPrice": 6800000,
            "salePrice": 5750000,
            "stockQuantity": 7
      },
      {
            "color": "Midnight Black",
            "size": "Bản Tựa Đầu 3D & Kê Chân (Full Option)",
            "sku": "CHR-GNV-13-BLK-FUL",
            "regularPrice": 7800000,
            "salePrice": 6600000,
            "stockQuantity": 4
      },
      {
            "color": "Platinum White",
            "size": "Bản Tiêu Chuẩn (Standard)",
            "sku": "CHR-GNV-13-WHT-STD",
            "regularPrice": 6000000,
            "salePrice": 5100000,
            "stockQuantity": 8
      },
      {
            "color": "Platinum White",
            "size": "Kèm Kê Chân Thư Giãn (Footrest Pro)",
            "sku": "CHR-GNV-13-WHT-FTR",
            "regularPrice": 7000000,
            "salePrice": 5950000,
            "stockQuantity": 5
      },
      {
            "color": "Platinum White",
            "size": "Bản Tựa Đầu 3D & Kê Chân (Full Option)",
            "sku": "CHR-GNV-13-WHT-FUL",
            "regularPrice": 8000000,
            "salePrice": 6800000,
            "stockQuantity": 3
      }
],
    shortDesc: "Ghế công thái học lưới chuẩn quốc tế bảo vệ cột sống tối đa.",
    desc: "Lưới Wintex Hàn Quốc thoáng khí đàn hồi, bệ đỡ tay 3D và tựa lưng điều chỉnh đa điểm giúp bạn làm việc cả ngày mà không bị mỏi lưng.",
    specs: {
      "Piston": "Class 4 đạt chuẩn BIFMA / SGS",
      "Tải trọng tối đa": "150 kg",
      "Bảo hành": "3 năm"
    },
    image: "assets/images/accent-chair.jpg",
    badge: "-15%",
    featured: false,
    topSeller: true
  },
  {
    id: 14,
    name: "Zurich Extendable Dining Table",
    sku: "TBL-ZUR-14",
    type: "variable",
    category: "Tables",
    brand: "Scandinavian Living",
    regularPrice: 24500000,
    salePrice: null,
    rating: 4.9,
    reviewsCount: 18,
    stockQuantity: 7,
    stockStatus: "instock",
    colors: ["Smoked Oak", "Walnut", "White Oak"],
    sizes: ["160-220cm (6-8 ghế)", "180-260cm (8-10 ghế)", "200-300cm (10-12 ghế)"],
    variations: [
      {
            "color": "Smoked Oak",
            "size": "160-220cm (6-8 ghế)",
            "sku": "TBL-ZUR-14-SOK-160",
            "regularPrice": 24500000,
            "salePrice": null,
            "stockQuantity": 5
      },
      {
            "color": "Smoked Oak",
            "size": "180-260cm (8-10 ghế)",
            "sku": "TBL-ZUR-14-SOK-180",
            "regularPrice": 28500000,
            "salePrice": null,
            "stockQuantity": 4
      },
      {
            "color": "Smoked Oak",
            "size": "200-300cm (10-12 ghế)",
            "sku": "TBL-ZUR-14-SOK-200",
            "regularPrice": 33500000,
            "salePrice": null,
            "stockQuantity": 2
      },
      {
            "color": "Walnut",
            "size": "160-220cm (6-8 ghế)",
            "sku": "TBL-ZUR-14-WAL-160",
            "regularPrice": 25500000,
            "salePrice": null,
            "stockQuantity": 4
      },
      {
            "color": "Walnut",
            "size": "180-260cm (8-10 ghế)",
            "sku": "TBL-ZUR-14-WAL-180",
            "regularPrice": 29500000,
            "salePrice": null,
            "stockQuantity": 3
      },
      {
            "color": "Walnut",
            "size": "200-300cm (10-12 ghế)",
            "sku": "TBL-ZUR-14-WAL-200",
            "regularPrice": 34500000,
            "salePrice": null,
            "stockQuantity": 2
      },
      {
            "color": "White Oak",
            "size": "160-220cm (6-8 ghế)",
            "sku": "TBL-ZUR-14-WOK-160",
            "regularPrice": 24500000,
            "salePrice": null,
            "stockQuantity": 5
      },
      {
            "color": "White Oak",
            "size": "180-260cm (8-10 ghế)",
            "sku": "TBL-ZUR-14-WOK-180",
            "regularPrice": 28500000,
            "salePrice": null,
            "stockQuantity": 4
      },
      {
            "color": "White Oak",
            "size": "200-300cm (10-12 ghế)",
            "sku": "TBL-ZUR-14-WOK-200",
            "regularPrice": 33500000,
            "salePrice": null,
            "stockQuantity": 2
      }
],
    shortDesc: "Bàn ăn mở rộng thông minh chứa được 6 đến 10 người tiện lợi.",
    desc: "Cơ chế kéo đẩy trợ lực mượt mà bằng ray trượt nhôm định hình Đức, dễ dàng mở rộng kích thước chỉ với một thao tác kéo nhẹ nhàng.",
    specs: {
      "Kích thước gấp": "160 x 90 x 76 cm, Mở rộng: 220 x 90 x 76 cm",
      "Cơ cấu": "Ray trợ lực chịu tải 100kg",
      "Bảo hành": "5 năm"
    },
    image: "assets/images/dining-table.jpg",
    badge: null,
    featured: true,
    topSeller: false
  },
  {
    id: 15,
    name: "Siena Tufted Velvet Ottoman",
    sku: "SOFA-SIE-15",
    type: "simple",
    category: "Sofas",
    brand: "LuxeStudio",
    regularPrice: 4500000,
    salePrice: null,
    rating: 4.7,
    reviewsCount: 15,
    stockQuantity: 16,
    stockStatus: "instock",
    colors: ["Champagne Beige", "Olive Green", "Slate Grey"],
    sizes: ["Size Nhỏ (Đường kính 50cm)", "Size Tiêu Chuẩn (Đường kính 60cm)", "Size Lớn (Đường kính 80cm)"],
    variations: [
      {
            "color": "Champagne Beige",
            "size": "Size Nhỏ (Đường kính 50cm)",
            "sku": "SOFA-SIE-15-BEI-D50",
            "regularPrice": 3600000,
            "salePrice": null,
            "stockQuantity": 8
      },
      {
            "color": "Champagne Beige",
            "size": "Size Tiêu Chuẩn (Đường kính 60cm)",
            "sku": "SOFA-SIE-15-BEI-D60",
            "regularPrice": 4500000,
            "salePrice": null,
            "stockQuantity": 12
      },
      {
            "color": "Champagne Beige",
            "size": "Size Lớn (Đường kính 80cm)",
            "sku": "SOFA-SIE-15-BEI-D80",
            "regularPrice": 6200000,
            "salePrice": null,
            "stockQuantity": 5
      },
      {
            "color": "Olive Green",
            "size": "Size Nhỏ (Đường kính 50cm)",
            "sku": "SOFA-SIE-15-GRN-D50",
            "regularPrice": 3600000,
            "salePrice": null,
            "stockQuantity": 6
      },
      {
            "color": "Olive Green",
            "size": "Size Tiêu Chuẩn (Đường kính 60cm)",
            "sku": "SOFA-SIE-15-GRN-D60",
            "regularPrice": 4500000,
            "salePrice": null,
            "stockQuantity": 9
      },
      {
            "color": "Olive Green",
            "size": "Size Lớn (Đường kính 80cm)",
            "sku": "SOFA-SIE-15-GRN-D80",
            "regularPrice": 6200000,
            "salePrice": null,
            "stockQuantity": 4
      },
      {
            "color": "Slate Grey",
            "size": "Size Nhỏ (Đường kính 50cm)",
            "sku": "SOFA-SIE-15-GRY-D50",
            "regularPrice": 3600000,
            "salePrice": null,
            "stockQuantity": 7
      },
      {
            "color": "Slate Grey",
            "size": "Size Tiêu Chuẩn (Đường kính 60cm)",
            "sku": "SOFA-SIE-15-GRY-D60",
            "regularPrice": 4500000,
            "salePrice": null,
            "stockQuantity": 10
      },
      {
            "color": "Slate Grey",
            "size": "Size Lớn (Đường kính 80cm)",
            "sku": "SOFA-SIE-15-GRY-D80",
            "regularPrice": 6200000,
            "salePrice": null,
            "stockQuantity": 3
      }
],
    shortDesc: "Đôn ngồi đệm nhung chần nút sang trọng đa năng cho phòng khách.",
    desc: "Chiếc đôn đa năng vừa làm ghế ngồi phụ, vừa làm bàn để khay trà hoặc gác chân thư giãn khi xem phim.",
    specs: {
      "Kích thước": "Đường kính 60cm, cao 42cm",
      "Chất liệu": "Vải nhung mượt + Khung gỗ thông",
      "Bảo hành": "2 năm"
    },
    image: "assets/images/hero-sofa.jpg",
    badge: null,
    featured: false,
    topSeller: false
  },
  {
    id: 16,
    name: "Lille Bouclé Curved Daybed",
    sku: "SOFA-LIL-16",
    type: "simple",
    category: "Sofas",
    brand: "LuxeStudio",
    regularPrice: 19000000,
    salePrice: null,
    rating: 4.8,
    reviewsCount: 9,
    stockQuantity: 4,
    stockStatus: "instock",
    colors: ["Cream White", "Warm Oatmeal", "Ash Grey"],
    sizes: ["160cm (Compact)", "180cm (Standard)", "210cm (Lounge Deluxe)"],
    variations: [
      {
            "color": "Cream White",
            "size": "160cm (Compact)",
            "sku": "SOFA-LIL-16-CRM-160",
            "regularPrice": 16500000,
            "salePrice": null,
            "stockQuantity": 4
      },
      {
            "color": "Cream White",
            "size": "180cm (Standard)",
            "sku": "SOFA-LIL-16-CRM-180",
            "regularPrice": 19000000,
            "salePrice": null,
            "stockQuantity": 6
      },
      {
            "color": "Cream White",
            "size": "210cm (Lounge Deluxe)",
            "sku": "SOFA-LIL-16-CRM-210",
            "regularPrice": 23500000,
            "salePrice": null,
            "stockQuantity": 3
      },
      {
            "color": "Warm Oatmeal",
            "size": "160cm (Compact)",
            "sku": "SOFA-LIL-16-OTM-160",
            "regularPrice": 16500000,
            "salePrice": null,
            "stockQuantity": 3
      },
      {
            "color": "Warm Oatmeal",
            "size": "180cm (Standard)",
            "sku": "SOFA-LIL-16-OTM-180",
            "regularPrice": 19000000,
            "salePrice": null,
            "stockQuantity": 5
      },
      {
            "color": "Warm Oatmeal",
            "size": "210cm (Lounge Deluxe)",
            "sku": "SOFA-LIL-16-OTM-210",
            "regularPrice": 23500000,
            "salePrice": null,
            "stockQuantity": 2
      },
      {
            "color": "Ash Grey",
            "size": "160cm (Compact)",
            "sku": "SOFA-LIL-16-GRY-160",
            "regularPrice": 16500000,
            "salePrice": null,
            "stockQuantity": 3
      },
      {
            "color": "Ash Grey",
            "size": "180cm (Standard)",
            "sku": "SOFA-LIL-16-GRY-180",
            "regularPrice": 19000000,
            "salePrice": null,
            "stockQuantity": 4
      },
      {
            "color": "Ash Grey",
            "size": "210cm (Lounge Deluxe)",
            "sku": "SOFA-LIL-16-GRY-210",
            "regularPrice": 23500000,
            "salePrice": null,
            "stockQuantity": 2
      }
],
    shortDesc: "Ghế sofa thư giãn uốn cong quyến rũ bọc vải hạt len bouclé.",
    desc: "Đường cong công thái học mềm mại tạo dáng chụp hình thời thượng trong các căn penthouse hoặc biệt thự hiện đại.",
    specs: {
      "Kích thước": "180 x 85 x 75 cm",
      "Vải bọc": "Len xù Bouclé Pháp",
      "Bảo hành": "3 năm"
    },
    image: "assets/images/hero-sofa.jpg",
    badge: null,
    featured: false,
    topSeller: false
  },
  {
    id: 17,
    name: "Reykjavik Industrial Desk Lamp",
    sku: "LGT-REY-17",
    type: "simple",
    category: "Lighting",
    brand: "NordicCraft",
    regularPrice: 2900000,
    salePrice: null,
    rating: 4.6,
    reviewsCount: 20,
    stockQuantity: 30,
    stockStatus: "instock",
    colors: ["Matte Black", "Brushed Copper", "Industrial Steel"],
    sizes: ["Tiêu Chuẩn (Cao 45cm)", "Cỡ Lớn (Cao 60cm)"],
    variations: [
      {
            "color": "Matte Black",
            "size": "Tiêu Chuẩn (Cao 45cm)",
            "sku": "LGT-REY-17-BLK-STD",
            "regularPrice": 2900000,
            "salePrice": null,
            "stockQuantity": 15
      },
      {
            "color": "Matte Black",
            "size": "Cỡ Lớn (Cao 60cm)",
            "sku": "LGT-REY-17-BLK-LRG",
            "regularPrice": 3600000,
            "salePrice": null,
            "stockQuantity": 8
      },
      {
            "color": "Brushed Copper",
            "size": "Tiêu Chuẩn (Cao 45cm)",
            "sku": "LGT-REY-17-CPR-STD",
            "regularPrice": 3100000,
            "salePrice": null,
            "stockQuantity": 10
      },
      {
            "color": "Brushed Copper",
            "size": "Cỡ Lớn (Cao 60cm)",
            "sku": "LGT-REY-17-CPR-LRG",
            "regularPrice": 3800000,
            "salePrice": null,
            "stockQuantity": 6
      },
      {
            "color": "Industrial Steel",
            "size": "Tiêu Chuẩn (Cao 45cm)",
            "sku": "LGT-REY-17-STL-STD",
            "regularPrice": 2900000,
            "salePrice": null,
            "stockQuantity": 12
      },
      {
            "color": "Industrial Steel",
            "size": "Cỡ Lớn (Cao 60cm)",
            "sku": "LGT-REY-17-STL-LRG",
            "regularPrice": 3600000,
            "salePrice": null,
            "stockQuantity": 7
      }
],
    shortDesc: "Đèn bàn học làm việc phong cách cơ khí công nghiệp hiện đại.",
    desc: "Khớp xoay kim loại đa hướng với lò xo cân bằng lực, điều chỉnh điểm sáng chuẩn xác cho công việc vẽ kỹ thuật và đọc sách.",
    specs: {
      "Chiều cao": "Tối đa 65 cm",
      "Chất liệu": "Thép sơn tĩnh điện chống xước",
      "Bảo hành": "2 năm"
    },
    image: "assets/images/brass-lamp.jpg",
    badge: null,
    featured: false,
    topSeller: false
  },
  {
    id: 18,
    name: "Tuscany Fluted Marble Side Table",
    sku: "TBL-TUS-18",
    type: "sale",
    category: "Tables",
    brand: "ArtisanHome",
    regularPrice: 9500000,
    salePrice: 6990000,
    rating: 4.9,
    reviewsCount: 27,
    stockQuantity: 10,
    stockStatus: "instock",
    colors: ["Carrara White Marble", "Nero Marquina Black", "Emerald Green Marble"],
    sizes: ["Đường kính 40cm (Cao 50cm)", "Đường kính 50cm (Cao 55cm)"],
    variations: [
      {
            "color": "Carrara White Marble",
            "size": "Đường kính 40cm (Cao 50cm)",
            "sku": "TBL-TUS-18-WHT-D40",
            "regularPrice": 9500000,
            "salePrice": 6990000,
            "stockQuantity": 6
      },
      {
            "color": "Carrara White Marble",
            "size": "Đường kính 50cm (Cao 55cm)",
            "sku": "TBL-TUS-18-WHT-D50",
            "regularPrice": 12000000,
            "salePrice": 8990000,
            "stockQuantity": 4
      },
      {
            "color": "Nero Marquina Black",
            "size": "Đường kính 40cm (Cao 50cm)",
            "sku": "TBL-TUS-18-BLK-D40",
            "regularPrice": 9800000,
            "salePrice": 7290000,
            "stockQuantity": 5
      },
      {
            "color": "Nero Marquina Black",
            "size": "Đường kính 50cm (Cao 55cm)",
            "sku": "TBL-TUS-18-BLK-D50",
            "regularPrice": 12500000,
            "salePrice": 9390000,
            "stockQuantity": 3
      },
      {
            "color": "Emerald Green Marble",
            "size": "Đường kính 40cm (Cao 50cm)",
            "sku": "TBL-TUS-18-EMR-D40",
            "regularPrice": 10500000,
            "salePrice": 7890000,
            "stockQuantity": 4
      },
      {
            "color": "Emerald Green Marble",
            "size": "Đường kính 50cm (Cao 55cm)",
            "sku": "TBL-TUS-18-EMR-D50",
            "regularPrice": 13500000,
            "salePrice": 9990000,
            "stockQuantity": 2
      }
],
    shortDesc: "Bàn phụ sofa mặt đá cẩm thạch Ý chân gỗ tiện khía rãnh.",
    desc: "Mặt đá cẩm thạch tự nhiên Carrara với vân mây xám độc bản không trùng lặp, chân gỗ óc chó tiện khía rãnh dọc cổ điển.",
    specs: {
      "Mặt đá": "Đá tự nhiên Carrara Marble nguyên khối dày 20mm",
      "Kích thước": "Đường kính 45cm, cao 52cm",
      "Bảo hành": "3 năm"
    },
    image: "assets/images/dining-table.jpg",
    badge: "-26%",
    featured: true,
    topSeller: true
  },
  {
    id: 19,
    name: "Bordeaux Brass Wall Sconce",
    sku: "LGT-BDX-19",
    type: "simple",
    category: "Lighting",
    brand: "NordicCraft",
    regularPrice: 2100000,
    salePrice: null,
    rating: 4.7,
    reviewsCount: 14,
    stockQuantity: 28,
    stockStatus: "instock",
    colors: ["Aged Brass", "Matte Black", "Rose Gold"],
    sizes: ["Bóng Đơn (Single Light)", "Bóng Đôi (Double Light)", "Bóng Ba (Triple Light)"],
    variations: [
      {
            "color": "Aged Brass",
            "size": "Bóng Đơn (Single Light)",
            "sku": "LGT-BDX-19-BRS-SGL",
            "regularPrice": 1500000,
            "salePrice": null,
            "stockQuantity": 15
      },
      {
            "color": "Aged Brass",
            "size": "Bóng Đôi (Double Light)",
            "sku": "LGT-BDX-19-BRS-DBL",
            "regularPrice": 2100000,
            "salePrice": null,
            "stockQuantity": 18
      },
      {
            "color": "Aged Brass",
            "size": "Bóng Ba (Triple Light)",
            "sku": "LGT-BDX-19-BRS-TPL",
            "regularPrice": 2800000,
            "salePrice": null,
            "stockQuantity": 8
      },
      {
            "color": "Matte Black",
            "size": "Bóng Đơn (Single Light)",
            "sku": "LGT-BDX-19-BLK-SGL",
            "regularPrice": 1500000,
            "salePrice": null,
            "stockQuantity": 12
      },
      {
            "color": "Matte Black",
            "size": "Bóng Đôi (Double Light)",
            "sku": "LGT-BDX-19-BLK-DBL",
            "regularPrice": 2100000,
            "salePrice": null,
            "stockQuantity": 15
      },
      {
            "color": "Matte Black",
            "size": "Bóng Ba (Triple Light)",
            "sku": "LGT-BDX-19-BLK-TPL",
            "regularPrice": 2800000,
            "salePrice": null,
            "stockQuantity": 6
      },
      {
            "color": "Rose Gold",
            "size": "Bóng Đơn (Single Light)",
            "sku": "LGT-BDX-19-RSG-SGL",
            "regularPrice": 1600000,
            "salePrice": null,
            "stockQuantity": 10
      },
      {
            "color": "Rose Gold",
            "size": "Bóng Đôi (Double Light)",
            "sku": "LGT-BDX-19-RSG-DBL",
            "regularPrice": 2200000,
            "salePrice": null,
            "stockQuantity": 12
      },
      {
            "color": "Rose Gold",
            "size": "Bóng Ba (Triple Light)",
            "sku": "LGT-BDX-19-RSG-TPL",
            "regularPrice": 2900000,
            "salePrice": null,
            "stockQuantity": 5
      }
],
    shortDesc: "Đèn tường đồng cổ điển chiếu sáng điểm nhấn cầu thang và phòng ngủ.",
    desc: "Đèn tường phát sáng 2 đầu hắt trên và hắt dưới tạo hiệu ứng vệt sáng kim cương sang trọng trên tường thạch cao.",
    specs: {
      "Chất liệu": "Đồng thau đúc",
      "Tiêu chuẩn": "IP44 dùng được cho cả phòng tắm khô",
      "Bảo hành": "2 năm"
    },
    image: "assets/images/brass-lamp.jpg",
    badge: null,
    featured: false,
    topSeller: false
  },
  {
    id: 20,
    name: "Kanso Abstract Arch Mirror",
    sku: "DEC-KAN-20",
    type: "simple",
    category: "Decoration",
    brand: "ArtisanHome",
    regularPrice: 4200000,
    salePrice: null,
    rating: 4.8,
    reviewsCount: 31,
    stockQuantity: 12,
    stockStatus: "instock",
    colors: ["Brushed Gold Frame", "Matte Black Frame", "Natural Oak Frame"],
    sizes: ["50x150cm", "60x160cm", "80x180cm (Toàn Thân Đại)"],
    variations: [
      {
            "color": "Brushed Gold Frame",
            "size": "50x150cm",
            "sku": "DEC-KAN-20-GLD-50150",
            "regularPrice": 3500000,
            "salePrice": null,
            "stockQuantity": 8
      },
      {
            "color": "Brushed Gold Frame",
            "size": "60x160cm",
            "sku": "DEC-KAN-20-GLD-60160",
            "regularPrice": 4200000,
            "salePrice": null,
            "stockQuantity": 12
      },
      {
            "color": "Brushed Gold Frame",
            "size": "80x180cm (Toàn Thân Đại)",
            "sku": "DEC-KAN-20-GLD-80180",
            "regularPrice": 5800000,
            "salePrice": null,
            "stockQuantity": 5
      },
      {
            "color": "Matte Black Frame",
            "size": "50x150cm",
            "sku": "DEC-KAN-20-BLK-50150",
            "regularPrice": 3500000,
            "salePrice": null,
            "stockQuantity": 7
      },
      {
            "color": "Matte Black Frame",
            "size": "60x160cm",
            "sku": "DEC-KAN-20-BLK-60160",
            "regularPrice": 4200000,
            "salePrice": null,
            "stockQuantity": 10
      },
      {
            "color": "Matte Black Frame",
            "size": "80x180cm (Toàn Thân Đại)",
            "sku": "DEC-KAN-20-BLK-80180",
            "regularPrice": 5800000,
            "salePrice": null,
            "stockQuantity": 4
      },
      {
            "color": "Natural Oak Frame",
            "size": "50x150cm",
            "sku": "DEC-KAN-20-OAK-50150",
            "regularPrice": 3700000,
            "salePrice": null,
            "stockQuantity": 6
      },
      {
            "color": "Natural Oak Frame",
            "size": "60x160cm",
            "sku": "DEC-KAN-20-OAK-60160",
            "regularPrice": 4500000,
            "salePrice": null,
            "stockQuantity": 8
      },
      {
            "color": "Natural Oak Frame",
            "size": "80x180cm (Toàn Thân Đại)",
            "sku": "DEC-KAN-20-OAK-80180",
            "regularPrice": 6200000,
            "salePrice": null,
            "stockQuantity": 3
      }
],
    shortDesc: "Gương đứng vòm phong cách tối giản viền nhôm anode chống oxy hóa.",
    desc: "Gương kính tráng bạc 8 lớp nhập khẩu Bỉ chống ố mốc trong môi trường ẩm, phản chiếu hình ảnh chân thực 1:1 không méo hình.",
    specs: {
      "Kích thước": "60 x 160 cm, Chân đỡ gập phía sau",
      "Khung viền": "Hợp kim nhôm Anode vàng xước",
      "Bảo hành": "2 năm"
    },
    image: "assets/images/ceramic-vase.jpg",
    badge: null,
    featured: false,
    topSeller: false
  }
];

const BLOGS_DATA = [
  {
    id: 1,
    title: "Nghệ thuật bài trí phòng khách tối giản xu hướng 2026",
    slug: "nghe-thuat-bai-tri-phong-khach-2026",
    category: "Interior Design",
    author: "Elena Vance",
    publishedDate: "2026-10-15",
    readingTime: "5 phút",
    image: "assets/images/hero-sofa.jpg",
    summary: "Khám phá cách phối màu trung tính, bố cục sofa module và luồng sáng tự nhiên để tạo không gian mở đẳng cấp.",
    content: "Nghệ thuật tối giản (Minimalism) trong nội thất hiện đại không đơn thuần là bớt đồ đạc, mà là tinh chọn từng món đồ đạt độ hoàn thiện cao nhất. Khi sắp đặt sofa Reddington tại trung tâm phòng khách, hãy chú ý hướng ánh sáng từ ban công hoặc cửa kính lửng. Kết hợp cùng bàn trà gỗ sồi Malmo tạo nên sự đối thoại cân bằng giữa chất liệu vải dệt mềm mại và vân gỗ tự nhiên mộc mạc."
  },
  {
    id: 2,
    title: "Bí quyết chọn bàn ăn gỗ tự nhiên cho căn hộ hiện đại",
    slug: "bi-quyet-chon-ban-an-go-tu-nhien",
    category: "Material & Craft",
    author: "Marcus Lindberg",
    publishedDate: "2026-10-18",
    readingTime: "7 phút",
    image: "assets/images/dining-table.jpg",
    summary: "Phân biệt giữa gỗ sồi trắng châu Âu, óc chó Bắc Mỹ và cách bảo dưỡng để giữ vân gỗ luôn sáng bóng.",
    content: "Bàn ăn là trái tim của gian bếp ấm cúng. Với dòng bàn Aarhus Scandinavian từ gỗ sồi thịt, bạn sẽ cảm nhận được độ lì đầm và đường vân uốn lượn mềm mại. Lớp sơn dầu gốc thực vật không chứa VOC bảo đảm an toàn thực phẩm cho gia đình có trẻ nhỏ, đồng thời giữ cho bề mặt gỗ thở tự nhiên theo chu kỳ thời tiết 4 mùa tại Việt Nam."
  },
  {
    id: 3,
    title: "Định hình ánh sáng đa tầng: Giải pháp nâng tầm không gian sống",
    slug: "dinh-hinh-anh-sang-da-tang-lighting",
    category: "Interior Design",
    author: "Elena Vance",
    publishedDate: "2026-10-20",
    readingTime: "6 phút",
    image: "assets/images/brass-lamp.jpg",
    summary: "Cách phối hợp giữa ánh sáng chung, ánh sáng tác vụ và đèn điểm nhấn nghệ thuật trong phòng khách.",
    content: "Ánh sáng là linh hồn của thiết kế nội thất. Thay vì chỉ dùng đèn âm trần phẳng tẻ nhạt, một cây đèn vòm cong Koppar bằng đồng thau đặt cạnh góc ghế sofa tạo ra vùng sáng ấm cúng tập trung khi đọc sách ban tối. Khi phối thêm đèn treo chùm thủy tinh hổ phách Aura trên bàn ăn, bạn đã biến ngôi nhà thành một khách sạn boutique sang trọng."
  },
  {
    id: 4,
    title: "Japandi & Wabi Sabi: Vẻ đẹp của sự mộc mạc và tĩnh lặng",
    slug: "japandi-wabi-sabi-phong-cach-noi-that",
    category: "Interior Design",
    author: "Kenji Sato",
    publishedDate: "2026-10-21",
    readingTime: "8 phút",
    image: "assets/images/ceramic-vase.jpg",
    summary: "Sự giao thoa hoàn mỹ giữa nét thanh lịch của Bắc Âu và triết lý trân quý sự không hoàn hảo từ Nhật Bản.",
    content: "Phong cách Japandi là điểm hẹn giữa sự thực dụng tối giản của Scandinavia và mỹ học Wabi-Sabi tôn vinh thời gian của Nhật Bản. Những chiếc bình gốm thô Kyoto với men mờ tự nhiên mang đến vẻ đẹp điềm đạm. Đặt một nhành bạch đàn hoặc hoa khô đơn độc sẽ khơi gợi cảm giác thanh tịnh bất tận cho góc làm việc của bạn."
  },
  {
    id: 5,
    title: "Tối ưu hóa giấc ngủ với giường ngủ công thái học và nỉ Bouclé",
    slug: "toi-uu-giac-ngu-voi-giuong-ngu-boucle",
    category: "Smart Living",
    author: "Dr. Clara Dupont",
    publishedDate: "2026-10-23",
    readingTime: "5 phút",
    image: "assets/images/platform-bed.jpg",
    summary: "Cấu trúc khung giường thấp, khả năng thoáng khí và bề mặt vải len hạt nâng niu giấc ngủ sâu.",
    content: "Một phần ba đời người dành cho giấc ngủ. Giường platform Oslo King Bed được tính toán độ cao tiêu chuẩn 35cm từ mặt sàn giúp cơ thể tiếp đất tự nhiên. Lớp đệm bọc vải bouclé dệt mật độ cao chống bám bụi và hỗ trợ lưu thông không khí, giữ nhiệt độ lý tưởng cho phòng ngủ quanh năm."
  },
  {
    id: 6,
    title: "Hướng dẫn chăm sóc và làm mới nội thất da bò Ý thủ công",
    slug: "huong-dan-cham-soc-noi-that-da-bo-y",
    category: "Material & Craft",
    author: "Marcus Lindberg",
    publishedDate: "2026-10-25",
    readingTime: "4 phút",
    image: "assets/images/accent-chair.jpg",
    summary: "Các bước dưỡng ẩm da, tránh nứt nẻ và làm sạch vết ố cho ghế thư giãn Bergen da thuộc tự nhiên.",
    content: "Da thật là chất liệu có thể 'già đi' một cách duyên dáng theo năm tháng (patina). Để giữ cho chiếc ghế Bergen luôn mềm mịn như nhung, hãy lau sạch bằng khăn ẩm vắt kiệt mỗi tuần và thoa sáp dưỡng chiết xuất sáp ong 6 tháng một lần. Tránh đặt da dưới ánh nắng trực tiếp của cửa sổ mà không có rèm che."
  }
];

// Multi-currency Support (VND and USD)
const USD_EXCHANGE_RATE = 25000;

function getCurrentCurrency() {
  try {
    return localStorage.getItem('woodluxe_currency') || 'VND';
  } catch (e) {
    return 'VND';
  }
}

// Helper to format currency dynamically based on selected currency (VND or USD)
function formatVND(amount) {
  if (amount == null || isNaN(amount)) return '';
  const cur = getCurrentCurrency();
  if (cur === 'USD') {
    const usd = Math.round(amount / USD_EXCHANGE_RATE);
    return '$' + usd.toLocaleString('en-US');
  }
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount).replace('₫', '') + '₫';
}

function formatCurrency(amount) {
  return formatVND(amount);
}


/**
 * Helper to retrieve exact variation by color and size from product
 */
function getProductVariation(product, color, size) {
  if (!product) return null;
  if (product.variations && product.variations.length > 0) {
    if (color && size) {
      const exact = product.variations.find(v => v.color === color && v.size === size);
      if (exact) return exact;
    }
    if (size) {
      const matchSize = product.variations.find(v => v.size === size);
      if (matchSize) return matchSize;
    }
    if (color) {
      const matchColor = product.variations.find(v => v.color === color);
      if (matchColor) return matchColor;
    }
    return product.variations[0];
  }
  return {
    color: color || (product.colors ? product.colors[0] : null),
    size: size || (product.sizes ? product.sizes[0] : null),
    regularPrice: product.regularPrice,
    salePrice: product.salePrice,
    stockQuantity: product.stockQuantity || 10,
    sku: product.sku
  };
}
