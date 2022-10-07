import "./News.css";
import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  article = [
    {
      title:
        "Toro, la parabola di Lazaro: cos&igrave; si &egrave; conquistato il posto",
      link: "https://www.tuttosport.com/news/calcio/serie-a/torino/2022/10/07-98110463/toro_la_parabola_di_lazaro_cos_si_conquistato_il_posto/",
      keywords: ["Toro", "lazaro"],
      creator: null,
      video_url: null,
      description:
        "L'austriaco titolare anche per i guai fisici di Singo e Sojvoda e l’involuzione di Aina, ma ha dimostrato in campo il suo valore",
      content: null,
      pubDate: "2022-10-07 06:52:09",
      image_url:
        "https://cdn.tuttosport.com/img/800/600/2022/10/07/081842448-897c2f69-9587-4e26-bdb5-7033b97a6e7d.jpg",
      source_id: "tuttosport",
      country: ["italy"],
      category: ["sports"],
      language: "italian",
    },
    {
      title: "Haaland, il marziano che riporta a terra Messi e Ronaldo",
      link: "https://www.tuttosport.com/news/calcio/calcio-estero/2022/10/07-98111599/haaland_il_marziano_che_riporta_a_terra_messi_e_ronaldo/",
      keywords: ["Haaland", "Ronaldo", "Messi"],
      creator: null,
      video_url: null,
      description:
        "L’ex Golden Boy ha una media di 1,58 reti a gara: in proiezione potrebbe chiudere la stagione a 101!",
      content: null,
      pubDate: "2022-10-07 06:52:09",
      image_url:
        "https://cdn.tuttosport.com/img/800/600/2022/10/07/083332113-78891df8-e5fe-4b9b-8db6-8b710700d5f8.jpg",
      source_id: "tuttosport",
      country: ["italy"],
      category: ["sports"],
      language: "italian",
    },
    {
      title:
        "Diretta Genoa-Cagliari ore 20.30: probabili formazioni e dove vederla in tv e in streaming",
      link: "https://www.tuttosport.com/news/calcio/serie-b/2022/10/07-98112074/diretta_genoa-cagliari_ore_20_30_probabili_formazioni_e_dove_vederla_in_tv_e_in_streaming/",
      keywords: ["Genoa-Cagliari", "Serie B", "probabili formazioni"],
      creator: null,
      video_url: null,
      description:
        "Il Grifone ospita i sardi nell'anticipo dell'8ª giornata del campionato di Serie B",
      content: null,
      pubDate: "2022-10-07 06:52:09",
      image_url:
        "https://cdn.tuttosport.com/img/800/600/2022/10/07/083652183-88d17e04-9e6c-4912-b81f-1e72e3cbc92e.jpg",
      source_id: "tuttosport",
      country: ["italy"],
      category: ["sports"],
      language: "italian",
    },
    {
      title: "3 ป.ยกคณะ! บิน'หนองบัวลำภู'เยี่ยมให้กำลังใจเหยื่อเหตุกราดยิง",
      link: "https://www.naewna.com/politic/685027",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "3 ป.ยกคณะบินหนองบัวลำภู เยี่ยมให้กำลังใจเหยื่อเหตุกราดยิง ด้านมท.1ยันมีกฎเกณฑ์ออกใบอนุญาตพกพาอาวุธปืนอยู่แล้ว ชี้มาตรกรโหดมาจากเรื่องสภาวะจิตใจ เมื่อเวลา 12.00 น.วันที่ 7 ตุลาคม 2565 ที่ท่าอากาศยานทหาร 2 กองบิน 6 (บน.6) ดอนเมือง กรุงเทพฯ พล.อ.ประยุทธ์ จันทร์โอชา นายกรัฐมนตรี และรมว.กลาโหม พร้อมคณะ พล.อ.ประวิตร วงษ์สุวรรณ รองนายกรัฐมนตรี นายสุพัฒน์พงษ์ พันธ์มีเชาว์ รองนายกรัฐมนตรี และรมว.พลังงาน พล.อ.อนุพงษ์ เผ่าจินดา รมว.มหาดไทย น.ส.ตรีนุช เทียนทอง รมว.ศึกษาธิการ นายสุชาติ ชมกลิ่น รมว.แรงงาน นายชัยวุฒิ ธนาคมานุสรณ์ รมว.ดิจิทัลเพื่อเศรษฐกิจและสังคม นายสาธิต ปิตุเตชะ รมช.สาธารณสุข พล.อ.ชัยชาญ ช้างมงคล รมช.กลาโหม ออกเดินทางไปเยี่ยมให้กำลังใจผู้บาดเจ็บและครอบครัวผู้เสียชีวิต ที่ จ.หนองบัวลําภู โดย พล.อ.ประยุทธ์ มีสีหน้าที่เคร่งเครียดไม่ตอบคำถามสื่อมวลชนแต่อย่างใด เช่นเดียวกับ พล.อ.ประวิตร ปฎิเสธตอบข้อซักถามเช่นกัน ทั้งนี้ก่อนขึ้นเครื่อง พล.อ.ประยุทธ์ ได้มีการหารือร่วมกับ ครม.ที่ร่วมคณะ ที่ห้องรับรองพิเศษ ประมาณ 20 นาที ก่อนออกเดินทาง ด้าน พล.อ.อนุพงษ์ ให้สัมภาษณ์ถึงมาตรการและกฎเกณฑ์การออกใบอนุญาตพกพาอาวุธปืนที่อยู่ภายใต้การกำกับดูแลของกระทรวงมหาดไทย ว่า การออกใบอนุญาตเราจะมีกฎเกณฑ์และขั้นตอนต่างๆในการพิจารณา ซึ่งที่ผ่านมาได้มีการดำเนินการอย่างรอบคอบ โดยเกณฑ์การพิจารณามีขั้นตอนละเอียดรอบคอบอยู่แล้ว แต่สิ่งที่ผมอยากจะบอกวันนี้ก็คือ เหตุการณ์ที่เกิดขึ้นเป็นเรื่องลึกๆ ข้างใน เราดูคุณสมบัติว่าเขามีคุณสมบัติที่เหมาะสมที่จะสามารถพกพาอาวุธได้หรือไม่ ซึ่งก็มีหลักเกณฑ์ทั่วไป แต่เหตุการณ์ที่เกิดขึ้นครั้งนี้ผมคิดว่าเป็นเรื่องของจิตใจภายใน คนที่ก่อเหตุเช่นนี้ เป็นคนที่มีจิตใจภายใน ข้างใน ที่ผิดปกติ ซึ่งก็ต้องหามาตรการที่จะควบคุมให้ได้ ที่สำคัญลองคิดดูว่าเหตุการณ์ครั้งนี้ไม่ได้ใช้อาวุธปืนอย่างเดียวแต่มีการใช้มีดด้วย แล้วอย่างนี้จะต้องให้เราห้ามใช้มีดด้วยหรือ อย่าลืมว่าครั้งนี้เขาใช้มีดทำร้ายเด็ก ถ้าเรามองผลที่เกิดขึ้นในขณะนี้มันไม่ใช่ไปดูเรื่องปืนเพียงอย่างเดียว จะต้องดูว่าทำไมคนถึงมีจิตใจข้างในอย่างนี้ได้ สังคมเราจะต้องทำให้ไม่มีคนเป็นแบบนี้ เพราะเขาไม่รู้จักความมีเมตตาปราณี ไม่รู้ในเรื่องจิตใจของคน ซึ่งเขาไม่มีสิทธิ์จะไปทำร้ายใคร ผมคิดว่าน่าจะเป็นพื้นฐานในตัวของผู้ที่ก่อเหตุ พล.อ.อนุพงษ์ กล่าว ผู้สื่อข่าวถามว่า ในเรื่องของศูนย์พัฒนาเด็กเล็กจะต้องมีมาตรการที่เข้มงวดมากขึ้นกว่านี้หรือไม่ พล.อ.อนุพงษ์ กล่าวว่า เรื่องนี้ถ้าพูดไปเดี๋ยวจะกลายเป็นประเด็น เอาเป็นว่าคุณจะไปทำอย่างนั้นไม่ได้ พออีกวันก็ต้องไปดูที่โรงเรียนมัธยมอีก มันเป็นไปไม่ได้ เขามีครูที่คอยดูแล แล้วจะต้องให้ครูเขามีปืนหรือถึงจะหยุดได้ อย่าลืมว่าเขามีครูคอยดูแลและครั้งนี้ครูก็เสียชีวิตด้วย เพราะฉะนั้นจะให้ไปเพิ่มเติมอย่างไร มันไม่ได้ คุณไปแก้ตรงนี้แล้วโรงเรียนมัธยมล่ะ อย่าให้ตนพูดเลยดีกว่าเดี๋ยวจะกลายเป็นประเด็น อย่างไรก็ตามทุกสถานที่เขามีมาตรการดูแลอยู่แล้ว - 006",
      content: null,
      pubDate: "2022-10-07 06:51:33",
      image_url: "https://www.naewna.com/uploads/news/source/685027.jpg",
      source_id: "naewna",
      country: ["thailand"],
      category: ["top"],
      language: "thai",
    },
    {
      title:
        "'นายกเล็กแก่งเสี้ยน' ประสาน ตร.ดูแลศูนย์เด็กเล็กหวั่นซ้ำรอยหนองบัวลำภู",
      link: "https://www.naewna.com/local/685029",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "นายกเล็กเทศบาลตำบลแก่งเสี้ยน เสียใจกับโศกนาฏกรรม เหยื่อกระสุนปืน ส.ต.อ.คลั่ง เตรียมประสานตำรวจดูแลความปลอดภัยศูนย์พัฒนาเด็ก พร้อมยอมรับยาเสพติดยังมีอยู่ จากกรณี ส.ต.อ.ปัญญา คำราบ อดีต ผบ.หมู่งาน ป. สภ.นาวัง อายุ 34 ปี บุกเข้าไปภายในศูนย์พัฒนาเด็กเล็ก อบต.อุทัยสวรรค์ อ.นากลาง จ.หนองบัวลำภู แล้วก่อเหตุใช้อาวุธปืนกราดยิงทำให้เด็กรวมทั้งผู้ใหญ่เสียชีวิตจำนวน 37 ศพ จนกลายโศกนาฏกรรมครั้งใหญ่ที่สุดเท่าที่เคยมีมาก่อน วันที่ 7 ต.ค.65 นายจักกฤช มหากิจวรกุล นายกองค์การบริหารส่วนตำบล (อบต.)แก่งเสี้ยน อ.เมือง จ.กาญจนบุรี เปิดเผยว่า ก่อนอื่น อบต.แก่งเสี้ยนรวมทั้งประชาชนชาวตำบลแก่งเสี้ยนต้องขอแสดงความเสียใจกับโศกนาฏกรรมที่เกิดขึ้นที่ศูนย์พัฒนาเด็กเล็ก อบต.อุทัยสวรรค์ อ.นากลาง จ.หนองบัวลำภู สำหรับศูนย์พัฒนาเด็กเล็ก อบต.แก่งเสี้ยนนั้นเดิมทีมีมาตรการดูแลความปลอดภัยอยู่แล้ว แต่ต่อจากนี้ไปทาง อบต.แก่งเสี้ยนจะหามาตรการณ์เพิ่มความปลอดภัยให้เข้มงวดขึ้นด้วยการประสานไปยัง พล.ต.ต.ไพโรจน์ คุ้มภัย ผบก.ภ.จว.กาญจนบุรี รวมทั้ง พ.ต.อ.สมเกียรติ โฉมฉาย ผกก.สภ.เมืองกาญจนบุรี ให้มาสร้างป้อมที่หน้าศูนย์พัฒนาเด็กแล้วแล้วให้ส่งเจ้าหน้าที่ตำรวจสายตรวจมาประจำหรือให้เจ้าหน้าที่สายตรวจมาตรวจสอบเป็นประจำทุกๆ 3 ชั่วโมง ซึ่งจะเพิ่มความอุ่นใจให้กับเด็กๆรวมทั้งครูและผู้ปกครองได้เป็นอย่างดี โดยในปีงบประมาณหน้า ทาง อบต.แก่งเสี้ยนมีแผนการว่าจะสร้างรั้วล้อมรอบพื้นที่ของศูนย์พัฒนาเด็กเล็กให้มีความปลอดภัยขึ้น ส่วนประเด็นการจัดจ้าง รปภ.ให้เข้ามารักษาความปลอดภัยนั้น ช่วงนี้คงไม่สามารถดำเนินการได้เนื่องจากติดปัญหางบประมาณในการจ้าง เนื่องจาก อบต.แก่งเสี้ยนนั้นมีงบประมาณที่ค่อนข้างจำกัด แต่ส่วนตัวแล้วอยากจะให้มี ซึ่งต้องมาดูว่าจะสามารถของบสนับสนุนจากหน่วยงานไหนได้บ้าง เช่น ขอสนับสนุนจากกระทรวงศึกษาธิการ หรือจากกระทรวงพัฒนาสังคมและความมั่นคงของมนุษย์ (พม.) แต่ถ้าหากในอนาคต อบต.แก่งเสี้ยนสามารถเก็บภาษีได้มากขึ้นก็จะจัดสรรงบประมาณสำหรับจัดจ้าง รปภ.เอาไว้ให้มาดูแลความปลอดภัยที่ศูนย์พัฒนาเด็กเล็กของเราด้วย แต่อย่างไรก็ตามเบื้องต้นได้กำชับให้ครูใส่ใจเกี่ยวกับการเปิดปิดประตูในช่วงรับนักเรียนเข้าศูนย์และช่วงช่วงเย็นที่ญาติหรือผู้ปกครองมารับเด็กๆกลับบ้าน จะต้องระมัดระวังและคอยสังเกตให้ดี และหลังจากนี้ตนจะขอให้เจ้าหน้าที่ตำรวจ สภ.เมืองกาญจนบุรี มาอำนวยความสะดวกและดูแลความปลอดภัยทั้งในช่วงเช้าและช่วงเย็นต่อไป ส่วนกรณีที่อดีตตำรวจยศ ส.ต.อ.ที่ไปก่อเหตุเสพยาบ้าไปด้วยนั้น เรื่องนี้การแก้ไขปัญหาระยะยาวนั้นตนมองว่ามันเป็นปัญหาใหญ่ระดับประเทศเกี่ยวกับการแก้ไขปัญหายาเสพติด ซึ่งในฐานะที่ตนเป็นนายก อบต.แก่งเสี้ยน ได้พยายามแก้ไขปัญหาเหล่านี้มาโดยตลอด แต่ขอยอมรับว่าปัญหายาเสพติดนั้นยังไม่หมดไปจากพื้นที่ อบต.แก่งงเสี้ยน อดีตที่ผ่านมาเคยมีการจับกุมผู้ต้องหาคดียาเสพติดมาแล้วหลายครั้ง โดยผู้จำหน่ายมีทั้งจำหน่ายให้กับลูกค้ารายย่อย มีทั้งใช้เป็นพื้นที่พักยาเสพติด ซึ่งตนได้มอบนโยบายให้กับ ส.อบต.แต่ละหมู่บ้าน รวมทั้งรองนายก อบต.และคณะผู้บริหาร ให้คอยสอดส่งดูแลมาโดยตลอด อีกทั้งยังประสานขอความร่วมมือจากเจ้าหน้าที่ชุดสืบสวน ภ.จว.กาญจนบุรี รวมทั้งเจ้าหน้าที่ตำรวจสืบ สภ.เมืองกาญจนบุรี ให้เข้ามาสืบสวนสอบสวนในการหาหลักฐานจับกุมกลุ่มผู้ค้าตลอดเวลา แต่ก็ยังคงมีหลงเหลืออยู่ - 003",
      content: null,
      pubDate: "2022-10-07 06:51:33",
      image_url: "https://www.naewna.com/uploads/news/source/685029.jpg",
      source_id: "naewna",
      country: ["thailand"],
      category: ["top"],
      language: "thai",
    },
    {
      title:
        "ชาวรัสเซีย2รายหนีทหารเข้าสหรัฐฯ สว.มะกันชี้ไม่ต้องไปรบตามคำสั่ง'ปูติน'",
      link: "https://www.naewna.com/inter/685030",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "ชาวรัสเซีย 2 ราย หนีทหารข้ามทะเลเข้าสหรัฐฯผ่านอลาสกา สว.มะกันชี้ชัดไม่ต้องการไปรบกับยูเครนตามคำสั่งปูติน 7 ต.ค. 2565 The Sydney Morning Herald หนังสือพิมพ์ท้องถิ่นเมืองซิดนีย์ ประเทศออสเตรเลีย เสนอข่าว Two Russians flee by boat to Alaska to avoid military service in Ukraine อ้างการเปิดเผยจากสำนักงานของ ลิซา เมอร์โควสกี (Lisa Murkowski) สมาชิกวุฒิสภา (สว.) สหรัฐอเมริกา เมื่อวันที่ 6 ต.ค. 2565 ว่า มีชาวรัสเซีย 2 คน เดินทางโดยเรือข้ามฝั่งจากชุมชนริมทะเลทางภาคตะวันออกของรัสเซียมายังรัฐอลาสกาของสหรัฐฯ เพราะไม่ต้องการถูกเกณฑ์ทหาร คารินา บอร์เจอร์ (Karina Borger) โฆษกส่วนตัวของ สว.เมอร์โควสกี ให้ข้อมูลว่า สำนักงานได้ติดต่อกับหน่วยยามฝั่ง รวมถึงฝ่ายศุลกากรและป้องกันชายแดนสหรัฐฯ แล้ว ขณะที่ ไมค์ ดันเลวี (Mike Dunleavy) ผู้ว่าการรัฐอลาสกา ระบุว่า ชาวรัสเซียทั้ง 2 รายขณะนี้กำลังถูกสอบปากคำ ทั้งนี้ ทางการอลาสกาไม่ไดคาดการณ์ว่าจะมีคนหรือกองเรือบรรทุกคนจำนวนมากมาอย่างต่อเนื่อง เพราะยังไม่เห็นสัญญาณบ่งชี้ดังกล่าว กรณีที่เกิดขึ้นนี้อาจเป็นเพียงครั้งเดียว ด้านฝ่ายศุลกากรและป้องกันชายแดนสหรัฐฯ ได้ส่งคำถามของสื่อมวลชนไปยังกระทรวงความมั่นคงแห่งมาตุภูมิ แต่ยังไมได้รับการชี้แจงใดๆ ย้อนไปเมื่อวันที่ 26 ก.ย. 2565 สำนักข่าว Novaya Gazeta Europe รายงานว่า นับตั้งแต่ วลาดิเมียร์ ปูติน (Vladimir Putin) ประธานาธิบดีรัสเซีย สั่งระดมกำลังพลเพิ่ม ก็มีชายชาวรัสเซียหาทางหนีออกนอกประเทศไปแล้ว 261,000 คน ถึงกระนั้น ทางการรัสเซียก็ปฏิเสธรายงานข่าวจากสื่อรัสเซียบางสำนัก ที่ระบุว่า มีชาวรัสเซียถึง 7 แสนคนหนีออกนอกประเทศหลังประกาศระดมพล โดยส่วนใหญ่หนีข้ามพรมแดนไปประเทศเพื่อนบ้านเช่นฟินแลนด์ จอร์เจีย คาซัดสถาน หรือเดินทางด้วยเครื่องบินไปตุรกี นอกจาก เมอร์โควสกี แล้ว แดน ซัลลิแวน (Dan Sullivan) สว.อลาสกา อีกคนหนึ่ง ยังให้ข้อมูลว่า เรือของชาวรัสเซียเทียบท่าที่ขายหาดใกล้กับแกมเบลล์ ซึ่งเป็นชุมชนโดดเดี่ยวที่มีประชากรราว 600 คน บนเกาะเซนต์ ลอว์เรนซ์ อย่างไรก็ตาม ซัลลิแวน ไมได้ระบุว่าเหตุการณ์เกิดขึ้นเมื่อใด โดยให้ข้อมูลแต่เพียงว่า ตนได้รับแจ้งเรื่องนี้จากผู้อาวุโชสที่เป็นผู้นำชุมชนย่านช่องแคบแบริ่งเมื่อเช้าวันที่ 5 ต.ค. 2565 เบน ดิทเดอริช (Ben Dietderich) โฆษกของ สว.ซัลลิแวน เปิดเผยว่า สำนักงานของ สว. รับทราบเรื่องการเดินทางโดยเรือของชาวรัสเซียทั้ง 2 รายแล้ว และเรื่องนี้ทำให้ 2 สิ่งชัดเจน 1.คนรัสเซียไม่ต้องการไปรบกับยูเครนในสงครามที่ปูตินก่อขึ้น กับ 2.เนื่องจากรัฐอลาสกาอยู่ใกล้กับรัสเซีย จึงมีบทบาทสำคัญในการรักษาความมั่นคงของชาติสหรัฐฯ ทั้งนี้ ชุมชนแกมเบลล์ อยู่ห่างจากชุมชนโนม ทางตะวันตกของอลาสกาประมาณ 320 กิโลเมตร และห่างจากคาบสมุทรชูคอทกา ในไซบีเรียของรัสเซีย ประมาณ 58 กิโลเมตร ที่มาwww.smh.com.au",
      content: null,
      pubDate: "2022-10-07 06:51:33",
      image_url: "https://www.naewna.com/uploads/news/source/685030.jpg",
      source_id: "naewna",
      country: ["thailand"],
      category: ["top"],
      language: "thai",
    },
    {
      title: "S&P Global Ratings aumenta il rating su Tesla da BB+ a BBB",
      link: "https://www.doveinvestire.com/mercato-azionario/sp-global-ratings-aumenta-rating-su-tesla/",
      keywords: null,
      creator: ["Dove Investire"],
      video_url: null,
      description:
        "S&P Global Ratings aumenta il rating su Tesla da BB+ a BBB Tesla è stata ufficialmente aggiornata al rating di credito a lungo termine investment grade da S&P Global Ratings. Ora il suo rating su Tesla passa da BB+ a BBB Fonte: DOVE INVESTIRE - Il sito di riferimento per finanza, economia e trading",
      content: null,
      pubDate: "2022-10-07 06:51:05",
      image_url: null,
      source_id: "doveinvestire",
      country: ["italy"],
      category: ["business"],
      language: "italian",
    },
    {
      title: "โคราชแห่บริจาคเลือดช่วยคนเจ็บเหตุกราดยิง",
      link: "https://www.innnews.co.th/news/local/news_424927/",
      keywords: [
        "ข่าว",
        "ภูมิภาค",
        "BreakingNews",
        "INNNews",
        "กราดยิงศูนย์เด็กเล็ก",
        "นครราชสีมา",
        "สภากาชาดไทย",
        "โคราช",
        "ไม่พลาดทุกเรื่องอินเทรนด์",
      ],
      creator: ["Nutcha Nilloung"],
      video_url: null,
      description:
        "ชาวโคราชแห่ร่วมบริจาคเลือดช่วยเหลือผู้ได้รับบาดเจ็บ เหตุกราดยิงศูนย์เด็กเล็กที่ จ.หนองบัวลำภู The post โคราชแห่บริจาคเลือดช่วยคนเจ็บเหตุกราดยิง appeared first on INN News.",
      content:
        "The post โคราชแห่บริจาคเลือดช่วยคนเจ็บเหตุกราดยิง appeared first on INN News.",
      pubDate: "2022-10-07 06:51:03",
      image_url: null,
      source_id: "innnews",
      country: ["thailand"],
      category: ["top"],
      language: "thai",
    },
    {
      title: "ออกแล้วผลตรวจร่างกาย ‘อดีตตำรวจคลั่ง’ กราดยิงหนองบัวลำภู",
      link: "https://www.thebangkokinsight.com/news/politics-general/general/963376/",
      keywords: [
        "General",
        "Politics",
        "กราดยิงหนองบัวลำภู",
        "จ.หนองบัวลำภู",
        "ตรวจร่างกาย",
        "สภ.นาวัง",
        "อดีตตำรวจคลั่ง",
        "ไม่พบสารเสพติด",
      ],
      creator: ["SUNITSA BOONMA"],
      video_url: null,
      description: "ออกแล้วผลตรวจในร่างกาย “อดีตตำรวจคลั่ง” กรา […]",
      content:
        "ออกแล้วผลตรวจในร่างกาย “อดีตตำรวจคลั่ง” กราดยิงหนองบัวลำภู ไม่พบสารเสพติด!! ความคืบหน้าล่าสุด จากเหตุสะเทือนขวัญกราดยิงหนองบัวลำภู โศกนาฏกรรมสะเทือนขวัญไปทั่วโลก หลังจากที่ ส.ต.อ.ปัญญา คำราบ อดีต ผบ.หมู่ ป.สภ.นาวัง ซึ่งถูกไล่ออกจากราชการ หลังถูกจับกุมคดียาเสพติด ก่อเหตุกราดยิงในศูนย์พัฒนาเด็กเล็ก อบต.อุทัยสวรรค์ อ.นากลาง จ.หนองบัวลำภู เบื้องต้นคาดมีผู้เสียชีวิตแล้วอย่างน้อย 38 ราย ตามที่เสนอข่าวไปแล้วนั้น ล่าสุดมีรายงานว่า ทีมแพทย์ได้ทำตรวจหาสารเสพติดในร่างกายของ ส.ต.อ.ปัญญา โดยเบื้องต้น ผลตรวจไม่พบสารเสพติด ส่วนความคืบหน้าจะรายงานให้หทราบต่อไป เจ้าหน้าที่นำร่างผู้เสียชีวิต 37 ราย ที่แพทย์นิติเวช ชันสูตรเสร็จแล้ว ออกเดินทางจาก รพ.ศูนย์อุดรธานี ไปส่งให้ครอบครัวผู้เสียชีวิต ที่อบต.อุทัยสวรรค์ อ.นากลาง จ.หนองบัวลำภู โดย มีรถมูลนิธิส่งเสริมธรรม จังหวัดอุดรธานี 30 คัน นำโลงบรรจุร่างไปส่งให้ญาติทั้งหมด ขอบคุณข้อมูล สรยุทธ สุทัศนะจินดา กรรมกรข่าว อ่านข่าวเพิ่มเติม ‘3 ป.’นำครม.ลงพื้นที่ให้กำลังใจครอบครัวเหยื่อ ‘กราดยิงหนองบัวลำภู‘ ถอดบทเรียน #กราดยิงหนองบัวลำภู อย่าให้คนตายฟรี พอล ภัทรพล ชี้ ถึงเวลาแก้กฎหมายปืน อ๋อม สกาวใจ ตั้งคำถาม อดีตตำรวจติดยา #กราดยิงหนองบัวลำภู หลังไล่ออก..ทำไมไม่สืบต่อ?",
      pubDate: "2022-10-07 06:50:17",
      image_url: null,
      source_id: "thebangkokinsight",
      country: ["thailand"],
      category: ["politics"],
      language: "thai",
    },
    {
      title: "Fernando Alonso eindigt bovenaan bij natte 1e training in Japan",
      link: "https://sportnieuws.nl/formule-1/fernando-alonso-eindigt-bovenaan-bij-natte-1e-training-in-japan/",
      keywords: ["Formule 1"],
      creator: ["Sportnieuws.nl"],
      video_url: null,
      description:
        "De snelste tijd voor de ontzettend natte training in Japan was voor Fernando Alonso. Hij reed op zijn intermediates een tijd van 1.42.248. De nummers 2 en 3 waren Carlos Sainz en Charles Leclerc. Max eindigde op 6 en de training eindigde met een crash van Mick Schumacher. Het regende de hele dag al op… Het bericht Fernando Alonso eindigt bovenaan bij natte 1e training in Japan verscheen eerst op Sportnieuws.",
      content: null,
      pubDate: "2022-10-07 06:50:15",
      image_url: null,
      source_id: "sportnieuws",
      country: ["netherland"],
      category: ["sports"],
      language: "dutch",
    },
    {
      title:
        "Cody Gakpo in vorm! Nominatie voor speler van de week na optreden tegen FC Zürich",
      link: "https://sportnieuws.nl/voetbal/binnenland/cody-gakpo-in-vorm-nominatie-voor-speler-van-de-week-na-optreden-tegen-fc-zurich/",
      keywords: ["Binnenland"],
      creator: ["Sportnieuws.nl"],
      video_url: null,
      description:
        "Cody Gakpo kan zomaar eens speler van de week worden in de Europa League. De aanvoerder van PSV scoorde 2 goals en gaf 1 assist in de gewonnen wedstrijd tegen FC Zürich. Er zijn nog 3 anderen genomineerd. Andere genomineerden zijn Marcus Rashford, Wissam Ben Yedder en Guélor Kanga. Alle 4 de heren scoorden 2… Het bericht Cody Gakpo in vorm! Nominatie voor speler van de week na optreden tegen FC Zürich verscheen eerst op Sportnieuws.",
      content: null,
      pubDate: "2022-10-07 06:50:15",
      image_url: null,
      source_id: "sportnieuws",
      country: ["netherland"],
      category: ["sports"],
      language: "dutch",
    },
    {
      title: "To musisz wiedzieć dziś rano 7 X 2022",
      link: "https://www.pb.pl/to-musisz-wiedziec-dzis-rano-7-x-2022-1165944",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "10 rzeczy, które warto wiedzieć przed rozpoczęciem sesji na GPW. Informacje ze spółek, analizy i rekomendacje.",
      content: null,
      pubDate: "2022-10-07 06:50:12",
      image_url: null,
      source_id: "pb",
      country: ["poland"],
      category: ["business"],
      language: "polish",
    },
    {
      title: "Rośnie presja na wydatki japońskich gospodarstw domowych",
      link: "https://www.pb.pl/rosnie-presja-na-wydatki-japonskich-gospodarstw-domowych-1165945",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Wraz z coraz szerzej otwierającą się gospodarką po ograniczeniach związanych z pandemią Covid-19 rosną wydatki japońskich gospodarstw domowych, jednak wysoka jak na japońskie standardy inflacja, osłabienie jena i spadek płac realnych nie są optymistycznym prognostykiem na przyszłość, informuje Reuters.",
      content: null,
      pubDate: "2022-10-07 06:50:12",
      image_url: null,
      source_id: "pb",
      country: ["poland"],
      category: ["business"],
      language: "polish",
    },
    {
      title: "Największy ETF na spółki konopne mocno w górę",
      link: "https://www.pb.pl/najwiekszy-etf-na-spolki-konopne-mocno-w-gore-1165947",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "AdvisorShares Pure US Cannabis ETF, największy pasywnie zarządzany fundusz, inwestujący w akcje spółek z branży konopnej, zdrożał o 34 proc. w ostatniej fazie sesji w czwartek w reakcji na pierwszy krok Joego Bidena w kierunku depenalizacji posiadania marihuany.",
      content: null,
      pubDate: "2022-10-07 06:50:12",
      image_url: null,
      source_id: "pb",
      country: ["poland"],
      category: ["business"],
      language: "polish",
    },
    {
      title:
        "Adam Glapiński ponownie jednym z najgorszych bankierów centralnych Europy",
      link: "https://www.bankier.pl/wiadomosc/Adam-Glapinski-ponownie-jednym-z-najgorszych-bankierow-centralnych-Europy-8418899.html?utm_source=RSS&utm_medium=RSS&utm_campaign=Wiadomosci",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        'Adam Glapiński tradycyjnie znalazł się wśród najniżej ocenianych szefów banków centralnych Europy w rankingu przygotowanym przez magazyn "Global Finance".',
      content: null,
      pubDate: "2022-10-07 06:50:12",
      image_url: null,
      source_id: "bankier",
      country: ["poland"],
      category: ["business"],
      language: "polish",
    },
    {
      title: "Metro Torino - Juve e Milan, squadre ferite allo specchio",
      link: "https://www.tuttojuve.com/altre-notizie/metro-torino-juve-e-milan-squadre-ferite-allo-specchio-617132",
      keywords: ["Altre notizie"],
      creator: null,
      video_url: null,
      description:
        "Su Metro edizione Torino: Milan e Juve Squadre ferite allo specchio. Milan-Juventus, domani alle 18 a San Siro.",
      content: null,
      pubDate: "2022-10-07 06:50:04",
      image_url:
        "https://net-storage.tcccdn.com/storage/tuttojuve.com/img_notizie/thumb3/5c/5c70152506555318514f638b07c91b2f-92405-oooz0000.jpeg",
      source_id: "tuttojuve",
      country: ["italy"],
      category: ["sports"],
      language: "italian",
    },
    {
      title:
        "Il Pd invoca lo Spirito Santo e i dem fanno il processo a Letta. E c'è chi si appella al Vangelo",
      link: "https://www.iltempo.it/politica/2022/10/07/news/direzione-pd-invoca-spirito-santo-dem-fanno-processo-enrico-letta-segretario-partito-democratico-chi-cita-vangelo-33361270/",
      keywords: null,
      creator: ["Claudio Querques"],
      video_url: null,
      description:
        'Che sarebbe stata una via crucis era chiaro sin dall\'inizio. Il risultato elettorale parla chiaro. Ma ciò che non era affatto scontato è che per rinascere dalle ceneri ci si sarebbe affidati alle virtù cardinali dello Spirito Santo. Copyright Barbara Pollastrini che a conclusione del suo intervento ha posto sotto la protezione celeste il prossimo congresso costituente del partito democratico. Prima di lei, nella relazione introduttiva alla direzione nazionale il segretario ormai uscente Enrico Letta aveva citato un passo del Vangelo. E il suo vice Peppe Provenzano una lettera di San Paolo ai Corinzi, "siamo tribolati ma non schiacciati». Se tre indizi fanno una prova vuol dire che il Pd è ancora nella sua fase mistica. Sta elaborando il lutto. Lo spiegone del segretario è durato poco più di un\'ora, cui sono seguiti 10 secondi scarsi di timidi applausi. Letta ha invitato tutti a usare un "linguaggio di verità, senza nessuna forma di in fingimento". Ha ammesso la sconfitta e si è preso la sua parte di responsabilità. Ha proposto un congresso costituente "ma sull\'Italia non sul Pd", da preparare in 4 fasi distinte da tenersi nella prossima primavera per "eleggere una classe dirigente giovane in grado di sfidare una donna giovane". S\'è detto convinto che la luna di miele per il nuovo governo non durerà a lungo e a quel punto bisognerà chiedere subito elezioni anticipate e non avventurarsi in governi di salvezza nazionale. E ha confermato che si farà da parte lasciando un vuoto che l\'antico gioco delle correnti farà di tutto per occupare militarmente.  "Gli elettori ci hanno dato un chiaro mandato: essere la seconda forza politica del Paese e stare all\'opposizione - ha respinto qualsiasi ipotesi di scioglimento Letta - siamo gli unici ad aver costruito un\'alternativa alla destra". Il Pd ha perso, viva il Pd, insomma. Cambierà tutto o forse niente se a prevalere sarà il solito gattopardismo doroteo. Il simbolo, tanto per dire, non cambierà. "Lo amo, resti così com\'è, con il tricolore e con il legame forte con l\'Ulivo". "La sconfitta? Colpa nostra ma anche di una legge elettorale pessima che abbiamo tentato di cambiare e che tenteremo di cambiare, un flipper che ha dato risultati casuali". Per Letta l\'unica forza politica che ha vinto le elezioni è Fdi. Le alleanze mancate? "La larga unità è stata impossibile, abbiamo avuto interlocutori che non volevano stare insieme".           Rigettate le accuse di governismo (11 anni a Palazzo Chigi negli ultimi 15...) il segretario è convinto che la caduta del governo Draghi è stata "un punto di non ritorno" anche se il risultato in fondo "non è stato catastrofico". Durissime le donne dem ridotte in Parlamento ad un manipolo di sopravvissute. Uno shock considerando che nell\'altro schieramento ci sarà la prima donna primo ministro. Monica Cirinnà: "Non abbiamo ascoltato l\'ansia di chi non arriva a fine mese". Alessia Morani contro chi vorrebbe dilazionare i tempi, "se si allunga il brodo non troviamo più il Pd". Il rischio di un "X Factor" su Conte o Calenda è forte. Così come "il concorso di bellezza" a titolo di risarcimento scegliendo una segretaria donna. Cesare Damiano recita il de profundis: "L\'esperienza del Pd è fallita, abbiamo imbalsamato le culture, vorrei che i dirigenti di questo partito fossero eletti dagli iscritti". E Zanda chiarisce che i capigruppo in Parlamento non li decide il segretario. Ci sarebbe infine Goffredo Bettini, il guru collegato in videoconferenza. Approva l\'idea di un congresso rifondativo e si produce in una autocritica che suona come un\'accusa. "Il mio errore? Non aver non contrastato a sufficienza la linea di Letta". E allora? Allora "si riparta dal chi siamo? cosa vogliamo? dove andiamo?". Come inizio niente male. Alla fine la relazione Letta, dopo 10 ore di discussione, è approvata con un contrario e due astenuti.    ',
      content: null,
      pubDate: "2022-10-07 06:50:00",
      image_url:
        "https://img.iltempo.it/images/2022/10/07/063022532-82be7b56-cfcd-4a57-b3df-327011869b9c.jpg",
      source_id: "iltempo",
      country: ["italy"],
      category: ["top"],
      language: "italian",
    },
    {
      title:
        "โน้ต วิเศษ รอแทบไม่ไหว ฤกษ์แต่ง แพทริเซีย ธ.ค. นี้ อยากมีลูกเลย เชื่อเป็นคู่ของเรา",
      link: "https://www.thebangkokinsight.com/news/lifestyle/entertainment/963381/",
      keywords: [
        "Entertainment",
        "@notevises",
        "@patriciagood",
        "ข่าวคนดัง",
        "ข่าวบันเทิง",
        "แพทริเซีย กู๊ด",
        "แพทริเซีย ธัญชนก",
        "แพทริเซีย-ธัญชนก กู๊ด",
        "แมทธิว กู๊ด",
        "โน้ต – วิเศษ รังสีสิงห์พิพัฒน์",
        "โน้ต–วิเศษ",
        "ไอจีดารา",
      ],
      creator: ["The Bangkok Insight Editorial Team"],
      video_url: null,
      description:
        "เป็นการเปิดใจกับสื่อมวลชนเป็นครั้งแรกของ โน้ต วิเศษ ว่า […]",
      content:
        "เป็นการเปิดใจกับสื่อมวลชนเป็นครั้งแรกของ โน้ต วิเศษ ว่าที่เจ้าบ่าวป้ายแดงคนต่อไป หลังคุกเข่าขอนางเอกสาว แพทริเซีย กู๊ด ที่คบหากันมา 3 ปี ขอแต่งงานกลางสวนสาธารณะ Hyde Park London ที่ประเทศอังกฤษ เมื่อวันที่ 2 มิถุนายน ที่ผ่านมา ระหว่างที่ แพท ไปเที่ยวกับครอบครัว และ หนุ่มโน้ต ก็บินตามไป เพื่อทำเซอร์ไพรส์ขอแต่งงาน บรรยากาศสุดเรียบง่ายแต่บอกเลยว่าโรแมนติกสุด ๆ ขาเผือกไม่ได้พัก! จับตาเพื่อน นิ้ง ชัญญา หลังเคลียร์ปมมือที่ 3 อยู่ ๆ ก็ลั่นสตอรี่แบบนี้..? มาตามนัด! แฉข้อมูลเพิ่ม ดารา ค. หลอกเงินนักศึกษา 15 ล้าน พร้อมคลิปเสียงชัด ตูน บอดี้สแลม เคลื่อนไหวแล้ว หลังถูก ILLSLICK ฉุนพูดท้าทาย ไม่สนดราม่าเดือด โดยเมื่อวานนี้ (6 ต.ค.) โน้ต วิเศษ ได้เปิดใจกับสื่อมวลชนถึงนาทีตัดสินใจเซอร์ไพรส์ขอแต่งงาน “ตอนนี้มีความคืบหน้าแล้ว ก็เตรียมตัวอยู่ มีฤกษ์แล้วครับ ภายในปีนี้ ก็จะเรียนเชิญทุกคนอย่างเป็นทางการอีกรอบด้วยครับ อีกไม่กี่เดือนแล้ว คือจริงๆ ฤกษ์เราได้ปีนี้เลย ไม่งั้นจะเป็น 2024 ก็เลยคิดว่าเอาเป็นปีนี้เลยแล้วกัน วันจะแจ้งอีกที แต่ประมาณเดือนธันวาคมครับ” คอนเซ็ปต์ให้แพทเลือกได้เต็มที่เลยใช่ไหม ? “ใช่ เรามีแพลนเนอร์ แต่ว่ามีอะไรก็อยากให้น้องเคาะเลย ส่วนใหญ่ถ้าเขาเคาะได้ ผมก็โอเค ส่วนเรื่องธีมเดี๋ยวแจ้งอีกครับ ให้สิทธิ์น้องเต็มที่ ให้เขาตัดสินใจดีกว่า เราจะได้ไม่ต้องเถียงกันครับ เรื่องความคิดไม่ตรงกันไม่ค่อยมี จริง ๆ ก็ค่อนข้างเซอร์ไพรส์ เพราะส่วนใหญ่ความคิดหรืออะไรแบบนี้ มันค่อนข้างตรงกันหมด ตอนนี้ก็ได้ประมาณ 60 เปอร์เซ็นต์แล้ว อยู่ในขั้นตอนอยู่ ก็ตื่นเต้นครับ” ย้อนกลับไปโมเมนต์ขอแต่งงาน ? “คือเราตั้งใจว่าอยากจะเป็นเซอร์ไพรส์ แล้วด้วยการที่ผมเรียนรู้ ว่าน้องเขาเป็นคนยังไง ก็คิดว่าอยากจะทำให้มันเป็นธรรมชาติที่สุด ก็เลยต้องหาโมเมนต์ที่มันเซอร์ไพรส์จริง ๆ อยากจะเล่าว่าเป็นครั้งที่สองในการขอ ไม่ใช่ว่าเป็นการขอครั้งที่สองนะครับ หมายถึงว่าเกือบจะขอเขาแล้วรอบหนึ่ง เดี๋ยววันไหนจะแชร์ภาพให้ดู คือให้เพื่อน ๆ ดูทุกคนหัวเราะมาก คือมันเป็นโมเมนต์ที่ไม่ได้เฟล แต่คือผมจะขอแล้วมันตื่นเต้น เลยอะ โอเค ไม่ใช่ครั้งนี้ คือเป็นในทริปเดียวกัน แต่จังหวะมันไม่ดีตอนนี้ ผิดจากที่ตั้งใจไว้นิดหนึ่ง อยากที่บอกว่าพออะไรที่มันไม่ใช่เซอร์ไพรส์ หรือจังหวะมันไม่ได้ ก็เลยหยุดไว้ก่อน แล้วก็มีโมเมนต์อีกรอบครับ” น้องรู้ตัวไหม ? “ไม่รู้ตัวเลยครับ มีภาพอยู่ เดี๋ยวจะแชร์ให้ดูครับ (ยิ้ม) คือพอครั้งแรกผ่านไป ก็รู้แล้วว่าเราต้องรวบรวมสติขนาดไหน ก็เลยพอทำใจก่อนได้ครับ (หัวเราะ)” น้องค่อนข้างหัวร้อนตอนนั้น ? “ใช่ครับ ก็ดูจังหวะตื่นมาแดดออก น้องอารมณ์ดี ดูทิศทางนิดนึง ผมก็วางแผนคนเดียว แต่ก็บอกทีบ้านไว้ครับ” โมเมนต์คุกเข่าขอน้องแต่งงานเราพูดอะไร ? “ก็พูดไม่ออก แล้วก็พูดปกติ สิ่งที่เตรียมกับที่พูดก็คล้าย ๆ กันครับ คือเราพูดไม่ออกไปสักพักหนึ่ง แล้วก็พูดออกมาว่า โอเค แต่งงานกันไหม ประมาณนั้นครับ ถามว่าทำไมต้องเป็นทริปนั้น ผมรู้สึกว่าจังหวะชีวิตมันเป็นทริปที่ผมรู้สึกว่าผมกับน้องก็คบกันมา 3 ปี คิดว่าถ้าไม่ใช่เวลานี้ อีกปี สองปี ก็เป็นคนนี้อยู่ดี ก็เลยคิดว่าจังหวะนี้เลยดีกว่า ตอนแรกคิดว่าฤกษ์แต่งน่าจะเป็นต้นปีหน้า มีเวลาให้เตรียมตัว เพราะเท่าที่ผมเข้าใจมันต้องใช้เวลาในการเตรียมตัว แต่พอไปดูวันก็ได้ประมาณเดือนธันวาคม เราไปดูฤกษ์ด้วยกัน ดูว่ามีปีนี้นะช่วงธันวาคมทันไหม หรือกับปี 2024 ต้นปีเลย ก็เลยดูว่าถ้าอย่างนั้นเราก็ทำให้เรียบร้อยไปเลยดีกว่า” อะไรที่ทำให้เรารู้สึกว่าผู้หญิงคนนี้จะมาเป็นภรรยาของเรา ? “ก็ด้วยเวลา และน้องเป็นคนที่น่ารักจริง ๆ จิตใจก็น่ารักมาก ให้ดูว่าไม่มีอะไรที่ผมจะติเขาได้ รู้สึกว่าคนนี้น่าจะเป็นคู่ของเรา และอย่างที่บอกว่าผมรู้สึกจริง ๆ ว่า ถ้าไม่ใช่ปีนี้อีก 2–3 ปี ผมก็ขอเขาอยู่ดี ก็เลยคิดว่าน่าจะได้แล้ว ก็เลยลองดู” เคยบอกคำนี้กับน้องไหม ? “ก็บอกครับ เพราะเขาก็ถามว่าทำไมเป็นเขา น้องก็เขิน ถามว่าแพ้ทางไหม ผมไม่แน่ใจความหมาย แต่ผมรู้สึกว่าเราเข้ากันได้ดีแบบธรรมชาติมาก ๆ ผมว่าตรงนี้มันสำคัญ และอยู่ด้วยแล้วก็สบายใจครับ” คุยเรื่องการสร้างครอบครัวกันไว้ก่อนแล้ว ? “ก็คุยกันในระดับหนึ่งครับ” เห็นว่าแหวนที่ซื้อมาไม่พอดี ? “ใช่ครับ ขนาดใหญ่ไปก็ต้องปรับ ตอนแรกก็จะวัดแต่ไม่เป็นไร รู้สึกว่าเราให้ก่อนแล้วค่อยเอากลับมาปรับเอา ก็เป็นแหวนของคุณแม่ครับ” งานแต่งงานใหญ่เลยไหม ? “คุยกันแพทก็อยากจะได้งานที่เป็นกันเอง แล้วพอเราเริ่มชวนคนมา เริ่มจากเล็ก ๆ มันก็จะค่อย ๆ ใหญ่ขึ้น แต่ผมว่าเป็นกลาง ๆ ดีกว่า ก็จะชวนแต่เพื่อนที่รู้จัก ส่วนที่น้องบอกอยากจะไปจัดงานที่ภูเก็ตด้วย ก็ไม่แน่ แต่อย่างที่บอกว่าเราอาจจะมีมากกว่า 1 งาน หรือประมาณ 2 ที่ถ้าเป็นไปได้ครับ” อนาคตครอบครัวเราจะใหญ่แค่ไหน ? “ก็อยากปล่อยเป็นธรรมชาติ แต่ผมก็อยากจะมีน้องสัก 2–3 คน ก็อยากให้เท่าพี่ชาย (น็อต วิศรุต) เพราะหลาน ๆ ที่บ้านก็ 10 คนแล้วครับ ถามว่าคุยกับน้องหรือยัง ก็อย่างที่บอกเรามีความคิดค่อนข้างตรงกัน พอบอก 2–3 คน เขาก็โอเค ถามว่าจะเป็นแฝดมั้ย ก็ตามธรรมชาติเลยครับ ถ้าแฝดก็ดี น่ารักดีครับ” หลังแต่งก็มีได้เลย หรือน้องมีงานค้างไหม ? “อันนี้ต้องถามน้องครับ (ยิ้ม)” พร้อมใช้ชีวิตคู่ ? “ใช่ครับ อันนี้ก็อยากให้ถามเพิ่มวันงานแต่งจริงมากกว่า เดี๋ยววันนั้นไม่มีอะไรพูด (หัวเราะ) ก็อยากจะมานั่งกับน้องแล้วบอก ส่วนเรื่องสถานที่ก็ได้แล้วครับ เดี๋ยวแจ้งอีกทีครับ (ยิ้ม)” คลิปจาก NineEntertain Official อ่านข่าวเพิ่มเติม โตโน่ ภาคิน เข้าใจดีต้องโดนถล่ม ไลฟ์แจงปมว่ายน้ำข้ามโขง เซอร์ไพรส์บริจาคทะลุล้าน ปิดไม่มิด! เมาท์พระเอกร่างบึ้ก ชอบคบหลบ ๆ ซ่อน ๆ ฝ่ายหญิงหลุดโป๊ะอยู่คอนโด เหน็บใคร? นางเอกสายติสท์ นาน ๆ ฟาดที อดไม่ไหวภัยความมั่น แฮชแท็กชวนสะดุ้ง!  ",
      pubDate: "2022-10-07 06:49:27",
      image_url: null,
      source_id: "thebangkokinsight",
      country: ["thailand"],
      category: ["entertainment"],
      language: "thai",
    },
    {
      title: "นายกฯ ถกเครียด ครม.ก่อนลงพื้นที่หนองบัวฯ",
      link: "https://www.innnews.co.th/news/news_424923/",
      keywords: [
        "ข่าว",
        "BreakingNews",
        "INNNews",
        "การเมือง",
        "ดีอีเอส",
        "นายกรัฐมนตรี",
        "นายกฯ",
        "รัฐบาล",
        "ไม่พลาดทุกเรื่องอินเทรนด์",
      ],
      creator: ["yanisa_a"],
      video_url: null,
      description:
        "นายกฯ ถกเครียด ครม.ก่อนลงพื้นที่หนองบัวฯ กำชับช่วยเหลือ-เยียวยา สั่งดีอีเอส ดูแลเรื่องการบริจาคหวั่นคนแอบอ้าง ถกเรื่องการออกใบอนุญาตอาวุธปืนต้องรอบคอบ The post นายกฯ ถกเครียด ครม.ก่อนลงพื้นที่หนองบัวฯ appeared first on INN News.",
      content:
        "The post นายกฯ ถกเครียด ครม.ก่อนลงพื้นที่หนองบัวฯ appeared first on INN News.",
      pubDate: "2022-10-07 06:49:27",
      image_url: null,
      source_id: "innnews",
      country: ["thailand"],
      category: ["top"],
      language: "thai",
    },
    {
      title:
        "Nyoma veszett egy évente 25 millió lőszer gyártására alkalmas gépsornak Magyarországon",
      link: "https://444.hu/2022/10/07/nyoma-veszett-egy-evente-25-millio-loszer-gyartasara-alkalmas-gepsornak-magyarorszagon?utm_source=rss_feed&utm_medium=rss&utm_campaign=rss_syndication",
      keywords: ["kalasnyikov", "lőszer", "per", "jog"],
      creator: ["Vég Márton"],
      video_url: null,
      description: null,
      content:
        "Eltűnt egy évente 25 millió lőszer gyártására alkalmas gépsor Magyarországról - ezzel a címmel közölt terjedelmes cikket a 24.hu. A sztori elég kacifántos, ezért érdemes az egészet elolvasni, most csak néhány részletét emeljük ki.Szóval a miskolci székhelyű Borsodi Általános Gépgyár Kft.-ről (BSGÉP) van szó, amelyről a 24.hu tényfeltárása többek között annyit tudott meg, hogy érdeklődött a cégszerzés iránt Balajti László, a titkosszolgálatok egykori vezetője, illetve Pintér Sándor jobbkeze, Tasnádi László is tárgyalt az ügyben. Végül a több más tranzakcióban is érdekelt – többek között a Dunaferrnél is felbukkanó – Mikó István lett a befutó, legalábbis ő azt állítja, hogy megvette Jurij Shabajkin orosz vállalkozó üzletrészét, és ezzel beszállt a BSGÉP-be.A jelen helyzet előzménye, hogy Mikó – állítása szerint – megvette a kitoloncolt orosz vállalkozó üzletrészét a cégben, ezt viszont a kisebbségi tulajdonos, Papp Csaba nem fogadja el, ezért Mikó perre vitte az ügyet.Az eljárás során sejlett fel, hogy az ügy már nem is a tulajdonszerzés körül forog, hanem a cégben levő vagyonelemek – főként a lőszergyártő gépsor – megszerzése a tét. Mivel minden ilyen tranzakció nemzetbiztonsági felügyeletet is kap, ezért több állami szerven is végigment az ügy, s végül kiderült, hogy noha a BSGÉP felajánlott az államnak a hadiipari gépsort, az kézen-közön eltűnt.A bírósági perek anyagából azt lehet kihámozni, hogy tovább kavarodott a helyzet: a Pénzügyminisztérium szerint a lőszergyártó visszakerült a gépsort szállító országba, azaz Törökországba, a török illetékesek viszont azt közölték, hogy náluk nincs - írja a 24.hu.Ha a céges perben végül Papp Csabának adnának igazat, a vállalkozás többségi tulajdona és a két kamionnyi rakományt jelentő gyártósor feletti rendelkezés is visszaszállna az orosz többségi tulajdonosra, Jurij Shabajkinra. Ez a fordulat újabb nemzetbiztonsággal kapcsolatos kérdéseket nyitna meg.",
      pubDate: "2022-10-07 06:49:16",
      image_url: null,
      source_id: "444",
      country: ["hungary"],
      category: ["top"],
      language: "hungarian",
    },
    {
      title:
        "Peren kívüli egyezség született a mentális beteg, fekete férfi halálát okozó rendőrök ügyében",
      link: "https://444.hu/2022/10/07/peren-kivuli-egyezseg-szuletett-a-mentalis-beteg-fekete-ferfi-halalat-okozo-rendorok-ugyeben?utm_source=rss_feed&utm_medium=rss&utm_campaign=rss_syndication",
      keywords: null,
      creator: ["Fődi Kitti"],
      video_url: null,
      description: null,
      content:
        'Az amerikai Rochester városa peren kívüli eljárásban 12 millió dollár (ötmilliárd forint) kártérítést fizet egy rendőri intézkedés közben meghalt fekete férfi családjának - ismertette csütörtökön az AP amerikai hírügynökség a szövetségi bíró által jóváhagyott megállapodást rögzítő bírósági iratokra hivatkozva.A New York államban fekvő nagyváros polgármesterének közleménye szerint a megegyezés volt a legjobb döntés a város számára, a peres út sokkal többe került volna. Malik D. Evans a peren kívüli megállapodást azzal kommentálta, hogy az adófizetőknek többe került volna a bírósági út, ami fájdalmas költséget rakott volna a település közösségére.A megállapodásban szereplő 12 millió dollárt - az ügyvédi és perköltségek levonása után - Daniel Prude öt gyermeke kapja meg. A hagyatéki gondnokot képviselő ügyvéd, Matthew Piers úgy fogalmazott, hogy az összeg nagysága megfelelő jelzése annak, hogy Rochester városa elismeri, valami nagyon rossz dolog történt. Ugyanakkor fontos a város számára, hogy az esetet már "visszapillantó tükörből tekintse és előre menjen" - tette hozzá.Daniel Prude-t 2020. márciusában mentálisan zavart állapotban, a város havas utcáin, meztelenül fogták el a rendőrök. A férfit előzőleg testvére bevitte egy elmeklinikára, ahonnan vizsgálat után elengedték, majd testvére házából elszökött.Prude először együttműködő volt a hatósággal, majd már megbilincselve dulakodni kezdett a rendőrökkel, akik földre kényszerítették, fejére csuklyát húztak és két percig lent tartották, miután láthatólag már nem lélegzett. Ezt követően a kiérkező mentők utasítására szívmasszázst alkalmaztak, majd kórházba vitték, ahol oxigénhiányos állapotban tették lélegeztetőgépre. A férfinél nem sokkal később megállapították az agyhalált, és egy héttel a rendőri intézkedés után levették a lélegeztetőgépről.Az orvosszakértői vizsgálat megállapította, hogy Daniel Prude halálát emberölés okozta, a fizikai erőszak következtében kialakult oxigénhiányos állapot komplikációi, de halálához kábítószer okozta bódulat is hozzájárult, amelyet PCP, azaz angyalpor néven ismert drog idézett elő.Prude halálának körülményei - a boncolási jegyzőkönyv és a rendőri intézkedés videófelvétele - 2020 szeptemberében kerültek nyilvánosságra. Ezzel egy időben az is kiderült, hogy rendőri vezetők 2020. júniusában nyomást gyakoroltak a városra, hogy tartsa titokban az intézkedésről szóló felvételt. A hatóság attól tartott, hogy az ügy csak súlyosbítaná az akkor már zajló BLM (Black Lives Matter) tüntetéssorozatot, amely George Floyd - szintén rendőri intézkedés közben bekövetkezett - halála miatt robbant ki és vezetett erőszakhoz az Egyesült Államok és a világ számos nagyvárosában.A Prude-ügyben intézkedő rendőrökkel szemben eljárás indult, akik vallomásukban azt állították, hogy az intézkedés során a rendőrszakmai protokoll alapján jártak el. A vádesküdtszék nem emelt ellenük vádat. (MTI)',
      pubDate: "2022-10-07 06:49:16",
      image_url: null,
      source_id: "444",
      country: ["hungary"],
      category: ["top"],
      language: "hungarian",
    },
    {
      title: "เดินหน้า ไทยพร้อมจัด “เอเชียน อินดอร์เกมส์” มีชิงชัย 34 ชนิดกีฬา",
      link: "https://www.chiangmainews.co.th/sport/2758125/",
      keywords: [
        "กีฬา",
        "ทั่วไทย",
        "กัมพูชา",
        "สภาโอลิมปิกแห่งเอเชีย",
        "เอเชียน อินดอร์เกมส์",
      ],
      creator: ["แคท"],
      video_url: null,
      description:
        "OCA หรือ สภาโอลิมปิกแห่งเอเชีย จัดการประชุมสมัชชาใหญ่ ครั้งที่ 41 ประจำปี 2022 ที่กรุงพนมเปญ ประเทศกัมพูชา โดยมี สมเด็จอัครมหาเสนาบดีเดโช ฮุน เซน นายกรัฐมนตรีกัมพูชา เป็นประธานเปิดการประชุม และมีผู้แทนชาติสมาชิก 45 ประเทศเข้าร่วม โดยไทย นำโดย นายชัยภักดิ์ ศิริวัฒน์ รองประธานสภาโอลิมปิกแห่งเอเชีย ในฐานะคณะกรรมการจัดการแข่งขันเอเชียน อินดอร์ แอนด์ มาเชียลอาร์ทเกมส์ พร้อมด้วย นายธนา ไชยประสิทธ์ รองประธานคณะกรรมการโอลิมปิคแห่งประเทศไทย และ ดร.ก้องศักด ยอดมณี ผู้ว่าการการกีฬาแห่งประเทศไทย เข้าร่วม ดร.ก้องศักด เปิดเผยว่า “ประเทศไทยมาเพื่อแสดงความพร้อมในการเป็นเจ้าภาพจัดการแข่งขันเอเชียน อินดอร์ แอนด์ มาเชียลอาร์ท เกมส์ ซึ่งตอนนี้มีความพร้อมเกือบ 100% เรื่องของชนิดกีฬาจะมีทั้งหมด 34 ชนิดกีฬาโดยล่าสุดมติในที่ประชุมขอเพิ่ม กีฬาเบสบอลไฟว์ ที่กำลังเป็นที่นิยม ซึ่งประเทศไทยก็ยินดีที่จะจัดการแข่งขัน รวมไปถึงมีกีฬาสาธิตอีก 2 ชนิดคือ […] Source",
      content: null,
      pubDate: "2022-10-07 06:49:10",
      image_url: null,
      source_id: "chiangmainews",
      country: ["thailand"],
      category: ["top"],
      language: "thai",
    },
    {
      title:
        '"Armageddon nucleare, Putin non bluffa": per Biden è arrivato il momento',
      link: "https://www.liberoquotidiano.it/news/esteri/33361540/joe-biden-armageddon-nucleare-putin-non-bluffa.html",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        'Le parole di Joe Biden fanno spaventosamente crescere il livello d\'allarme. Il presidente degli Stati Uniti, infatti, afferma di "conoscere bene Vladimir Putin". Dunque aggiunge, testuali parole: "Non sta bluffando, c\'è davvero il rischio dell\'Armageddon nucleare". Parole pronunciate nella serata americana del 6 ottobre nel corso di una raccolta fondi ospitata a New York da James Murdoch, il figlio del conservatore Rupert Murdoch. Parole pesantissime, mai arrivate dalla Casa Bianca dall\'inizio del conflitto. Fino ad oggi anche il Pentagono aveva infatti mantenuto la linea della prudenza sull\'eventuale impiego delle armi nucleari da parte dello zar sanguinario. Biden, invece, cambia registro: "Per la prima volta dalla crisi dei missili Cubani (che avvenne nel 1962, ndr), dobbiamo fronteggiare la minaccia di un\'atomica, specie se le cose proseguiranno nella direzione in cui stiamo andando". E ancora, ha aggiunto: "Stiamo cercando di capire che cosa ha in serbo Putin? Se troverà una via d\'uscita? Come reagirà quando capirà di aver perso non solo la faccia, ma anche il potere? Abbiamo a che fare con un tizio che conosco decisamente bene. Non scherza quando parla di un potenziale uso delle armi tattiche nucleari o di armi chimiche o biologiche, perché il suo esercito si sta comportando molto male. E non che penso che ci sia la capacità di usare un\'arma tattica atomica, senza finire nell\'Armageddon". Toni ultimativi, catastrofici, come quando parla di "duello finale tra il bene e il male", una citazione del giorno prima del Giudizio, Nuovo Testamento.',
      content: null,
      pubDate: "2022-10-07 06:48:00",
      image_url:
        "https://img2.liberoquotidiano.it/images/2022/10/07/065053889-219e94e9-2cb9-4204-90be-74fd9bd2c95c.jpg",
      source_id: "liberoquotidiano",
      country: ["italy"],
      category: ["top"],
      language: "italian",
    },
    {
      title: "มวลน้ำก้อนใหญ่โถมเข้าขอนแก่นเร่งปิดทางน้ำ",
      link: "https://www.innnews.co.th/news/local/news_424870/",
      keywords: [
        "ข่าว",
        "ภูมิภาค",
        "BreakingNews",
        "INNNews",
        "ข่อนแก่น",
        "น้ำท่วม",
        "เทศบาลนครขอนแก่น",
        "ไม่พลาดทุกเรื่องอินเทรนด์",
      ],
      creator: ["Nutcha Nilloung"],
      video_url: null,
      description:
        "มวลน้ำก้อนใหญ่ โถมเข้าเมืองขอนแก่น เจ้าหน้าที่เร่งปิดทางน้ำ เสริมคันคลอง หวั่นน้ำทะลักเข้าเขตเศรษฐกิจ The post มวลน้ำก้อนใหญ่โถมเข้าขอนแก่นเร่งปิดทางน้ำ appeared first on INN News.",
      content:
        "The post มวลน้ำก้อนใหญ่โถมเข้าขอนแก่นเร่งปิดทางน้ำ appeared first on INN News.",
      pubDate: "2022-10-07 06:47:21",
      image_url: null,
      source_id: "innnews",
      country: ["thailand"],
      category: ["top"],
      language: "thai",
    },
    {
      title:
        "Wzruszające słowa Gortata o Ukrainie do koszykarzy NBA. Zaskoczył wszystkich",
      link: "https://sport.interia.pl/nba/news-wzruszajace-slowa-gortata-o-ukrainie-do-koszykarzy-nba-zasko,nId,6332709",
      keywords: ["NBA"],
      creator: null,
      video_url: null,
      description:
        'Marcin Gortat właśnie przygotowuje zawodników swojej byłej ekipy - Washington Wizards - do nowego sezonu NBA. Po czwartkowej sesji treningowej "The Polish Hammer" spotkał się z dziennikarzami i w pewnym momencie rozmowa z przedstawicielami mediów zeszła niespodziewanie na niezwykle poważne tematy - a mianowicie na sprawę wojny w Ukrainie. Jak podkreślił Gortat, w obliczu tragedii dziejących się co dzień u naszych sąsiadów kwestie takie, jak te związane z grą w koszykówkę naprawdę tracą na znaczeniu...',
      content: null,
      pubDate: "2022-10-07 06:47:08",
      image_url:
        "https://i.iplsc.com/wzruszajace-slowa-gortata-o-ukrainie-do-koszykarzy-nba-zasko/000G3GIZKJ2M04LQ-C321.jpg",
      source_id: "interiasport",
      country: ["poland"],
      category: ["sports"],
      language: "polish",
    },
    {
      title: "รร.สไตล์โมเดิร์นใจกลางเมือง ย่านช้างม่อย แหล่งรวมที่เที่ยวที่กิน",
      link: "https://www.chiangmainews.co.th/eattravelrest/2758184/",
      keywords: [
        "กิน-เที่ยว-พัก",
        "เชียงใหม่",
        "DALEY HOTEL",
        "โรงแรมเชียงใหม่",
      ],
      creator: ["aaaum"],
      video_url: null,
      description:
        "วันนี้แอดพามาพักโรงแรมย่านช้างม่อย อย่าง 𝗗𝗮𝗿𝗹𝗲𝘆 𝗵𝗼𝘁𝗲𝗹 บอกเลยว่าเดินทางสะดวก เพราะโรงแรมตั้งอยู่ใจกลางแหล่งท่องเที่ยว และคาเฟ่ต่างๆ ในเมืองเชียงใหม่ มีรถโดยสารขับผ่านตลอด ใครมาตัวเปล่าอยากออกไปเที่ยวก็เดินออกมาหน้าโรงแรมแล้วโบกรถได้เลยจ้า ที่พักราคาสบายกระเป๋า เริ่มต้นที่ 800 บาทเท่านั้นน  โรงแรมตกแต่งแบบโมเดิร์นๆ มีมุม Art Paint อยู่หลายจุด น่ารักมาก ไปเซลฟี่สวยๆ ได้เยอะเลย จุดที่แอดชอบมากคือโซนล็อบบี้ที่ตกแต่งด้วยโคมไฟหลากอัน และนาฬิกาหลากสีค่ะ เป็นนาฬิกาที่บอกเวลาของประเทศต่างๆ มุมนี้ถ่ายรูปออกมาสวยสุดๆ โซนล็อบบี้เขาก็เตรียมที่นั่งไว้ให้เยอะมากก ภายในโรงแรมจะมีลิฟต์ด้วยกัน 2 ตัว และในส่วนของเครื่องใช้ภายในห้องก็จัดกันมาให้อย่างครบครัน มีลานจอดรถให้อยู่ทางด้านหลัง วันนี้แอดจะพาไปดู 3 ห้อง 3 แบบ เริ่มกันที่ห้องแรก 𝗦𝘂𝗽𝗲𝗿𝗶𝗼𝗿 𝗿𝗼𝗼𝗺 🛏🛏 ห้องโทนสีขาวดูสบายตา ห้องนี้เป็นห้องเตียงเดี่ยว 2 เตียงนะคะ ใครที่มากับเฟรนด์คู่หูคู่ใจ ห้องกว้างอยู่กันแบบสบายๆ มีทีวีและของใช้ต่างๆ บริการในห้องแบบครบครันจ้า 𝗗𝗲𝗹𝘂𝘅𝗲 𝗱𝗼𝘂𝗯𝗹𝗲 𝘀𝗶𝗻𝗴𝗹𝗲 𝗿𝗼𝗼𝗺 🛏🛏 ห้องนี้ตกแต่งแบบโมเดิร์นออกมินิมอลนิดๆ […] Source",
      content: null,
      pubDate: "2022-10-07 06:47:07",
      image_url: null,
      source_id: "chiangmainews",
      country: ["thailand"],
      category: ["top"],
      language: "thai",
    },
    {
      title:
        'Skoki. Ukraina organizuje pierwsze zawody w dobie wojny. "Tu bomby nie spadały"',
      link: "https://sport.tvp.pl/63784602/skoki-mistrzostwa-ukrainy-w-worochcie-pierwsze-od-wybuchu-wojny-z-rosja",
      keywords: null,
      creator: null,
      video_url: null,
      description: null,
      content: null,
      pubDate: "2022-10-07 06:47:00",
      image_url: null,
      source_id: "tvp",
      country: ["poland"],
      category: ["sports"],
      language: "polish",
    },
    {
      title: "‘สุวรรณภูมิ’ จอดรถฟรี 6 วัน หยุดยาว 12 – 17 ต.ค. 65",
      link: "https://www.thebangkokinsight.com/news/business/963366/",
      keywords: [
        "Business",
        "Economics",
        "จอดรถฟรี",
        "จัดรถรับ-ส่ง",
        "ท่าอากาศยานสุวรรณภูมิ",
        "ลานจอดรถระยะยาว โซน C",
        "หยุดยาว",
        "เผื่อเวลาการเดินทาง",
      ],
      creator: ["NAPAPORN PANITCHART"],
      video_url: null,
      description:
        "ท่าอากาศยานสุวรรณภูมิ เปิดให้บริการ จอดรถฟรี 6 วัน หยุด […]",
      content:
        "ท่าอากาศยานสุวรรณภูมิ เปิดให้บริการ จอดรถฟรี 6 วัน หยุดยาว ระหว่างวันที่ 12 – 17 ต.ค. 65 ณ ลานจอดรถโซน C ท่าอากาศยานสุวรรณภูมิ (ทสภ.) กระทรวงคมนาคม ได้ทำการยกเว้นอัตราค่าบริการจอดรถhttps://www.thebangkokinsight.com/news/business/economics/952632/ ที่ลานจอดรถระยะยาว (Long Term Parking) โซน C ซึ่งสามารถจอดรถได้จำนวน 718 คัน ในช่วงวันหยุดยาว วันคล้ายวันสวรรคต พระบาทสมเด็จพระบรมชนกาธิเบศร มหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร วันที่ 13 ตุลาคม 2565 และ วันหยุดราชการกรณีพิเศษ วันที่ 14 ตุลาคม 2565 จอดรถฟรี 6 วัน บริการรถรับ-ส่ง ลานจอดรถ-อาคารผู้โดยสาร ผู้โดยสาร ผู้ใช้บริการ สามารถนำรถยนต์เข้ามาจอดฟรี ระหว่างวันที่ 12 – 17 ตุลาคม 2565 ตั้งแต่เวลา 00.01 น. ของวันพุธที่ 12 ตุลาคม 2565 ถึงเวลา 24.00 น. ของวันจันทร์ที่ 17 ตุลาคม 2565 รวมทั้งสิ้น 6 วัน ทั้งนี้ ทสภ. ได้จัดรถ Shuttle Bus สาย A วิ่งให้บริการรับ – ส่งเพื่ออำนวยความสะดวกแก่ผู้โดยสาร ระหว่างลานจอดรถระยะยาวโซน C และอาคารผู้โดยสารทุก ๆ 15 นาที ตลอด 24 ชั่วโมง โดยไม่เสียค่าใช้จ่าย โดยรถ Shuttle Bus สาย A จะเริ่มวิ่งจากศูนย์การขนส่งสาธารณะ (Public Transportation Center) ไปยังลานจอดรถระยะยาวโซน C และแวะจอดรับ – ส่งตามจุดต่าง ๆ ก่อนจะไปจอดที่อาคารผู้โดยสารตรงชั้น 1 ประตู 3 และประตู 8 จากนั้นจะวนไปที่ลานจอดรถระยะยาวโซน A และกลับเข้าสู่ศูนย์การขนส่งสาธารณะ แนะเผื่อเวลาเดินทาง ทสภ. ขอความร่วมมือผู้โดยสารที่เดินทางในเที่ยวบินระหว่างประเทศ ควรเผื่อเวลาก่อนการเดินทางประมาณ 3 ชั่วโมง และเที่ยวบินภายในประเทศควรเผื่อเวลาก่อนการเดินทางประมาณ 2 ชั่วโมง หากผู้โดยสารต้องการสอบถามข้อมูลเพิ่มเติมสามารถติดต่อได้ที่ ศูนย์ปฏิบัติการอาคารจอดรถ หมายเลขโทรศัพท์ 0 2132 9511 ตลอด 24 ชั่วโมง หรือ AOT Contact Center หมายเลขโทรศัพท์ 1722 ตลอด 24 ชั่วโมง อ่านข่าวเพิ่มเติม กรมการขนส่งทางบก แนะ ‘ป้ายทะเบียนรถ’ หล่นหาย ยื่นคำร้องขอรับใหม่ ใช้เอกสารอะไรบ้าง เช็กเลย! โชว์ ‘ตัวเลขรายได้’ 11 เดือน 2.2 ล้านล้านบาท สูงกว่าประมาณการ 5.5% หลังท่องเที่ยว-เศรษฐกิจฟื้นตัว อนุมัติ 1.7 พันล้าน ‘ชดเชยรายได้’ ให้เกษตรกร 1.3 แสนราย ตามโครงการส่งเสริมการผลิตข้าวอินทรีย์",
      pubDate: "2022-10-07 06:46:48",
      image_url: null,
      source_id: "thebangkokinsight",
      country: ["thailand"],
      category: ["business"],
      language: "thai",
    },
    {
      title: "LHBTIQ-kunstwerk op elektriciteitskastjes weer hersteld",
      link: "https://www.nu.nl/delft/6228434/lhbtiq-kunstwerk-op-elektriciteitskastjes-weer-hersteld.html",
      keywords: ["login-vereist", "Delft"],
      creator: ["AD Haagsche Courant"],
      video_url: null,
      description:
        "De regenboogschildering op het elektriciteitskastje aan de Westvest in Delft is weer hersteld. Een paar weken geleden werd het kunstwerk beklad. Kunstenaar Barbara Termorshuizen heeft de woorden 'equality' en 'diversity' weer teruggespoten, met voor de zekerheid ook een extra anti-graffiti-laag erop.",
      content: null,
      pubDate: "2022-10-07 06:46:23",
      image_url:
        "https://media.nu.nl/m/iqzx32ba51j5_sqr256.jpg/lhbtiq-kunstwerk-op-elektriciteitskastjes-weer-hersteld.jpg",
      source_id: "nu",
      country: ["netherland"],
      category: ["top"],
      language: "dutch",
    },
    {
      title: "Kibice Śląska Wrocław deportowani z kraju. Roczny zakaz wjazdu",
      link: "https://www.sport.pl/pilka/7,65042,28995489,fani-slaska-wroclaw-deportowani-z-kraju-roczny-zakaz-wjazdu.html",
      keywords: null,
      creator: ["Błażej Winter"],
      video_url: null,
      description:
        "Grupa około 80 kibiców Śląska Wrocław została zatrzymana i wydalona z Serbii, jak twierdzą, bez żadnego powodu. Jechali na mecz Crveny Zvezdy Belgrad z Ferencvarosem Budapeszt w Lidze Europy, wspierać drużynę gości.",
      content: null,
      pubDate: "2022-10-07 06:46:00",
      image_url:
        "https://bi.im-g.pl/im/f1/a6/1b/z28995569M,fani-Slaska-wyrzuceni-z-kraju.jpg",
      source_id: "sport",
      country: ["poland"],
      category: ["sports"],
      language: "polish",
    },
    {
      title: "Nem lesz eső továbbra sem",
      link: "https://www.kemma.hu/helyi-idojaras/2022/10/nem-lesz-eso-tovabbra-sem?utm_source=hirstart&utm_medium=referral&utm_campaign=hiraggregator",
      keywords: ["alapértelmezett"],
      creator: null,
      video_url: null,
      description: "Marad a napsütéses időjárás térségünkben.",
      content: null,
      pubDate: "2022-10-07 06:45:45",
      image_url:
        "https://cdn.kemma.hu/2022/10/9EE48h2wIJcFkeSmFPmNsd_DtUqYjSQAIy_TEBciKT8/fill/1200/675/no/1/aHR0cHM6Ly9jbXNjZG4uYXBwLmNvbnRlbnQucHJpdmF0ZS9jb250ZW50L2I1OGIxYmQwNmRmOTRiNTQ5MzM4YjIyNzc5YzAwMDY5.jpg",
      source_id: "kemma",
      country: ["hungary"],
      category: ["top"],
      language: "hungarian",
    },
    {
      title:
        "Thomas Krol zoekt in de voorbereiding graag de grenzen op: ‘Soms moet je niet al te panisch doen’",
      link: "https://www.ad.nl/schaatsen/thomas-krol-zoekt-in-de-voorbereiding-graag-de-grenzen-op-soms-moet-je-niet-al-te-panisch-doen~ac2eec50/",
      keywords: null,
      creator: ["Vincent de Vries"],
      video_url: null,
      description:
        "Thomas Krol, die later deze maand in Thialf een World Cup-ticket hoopt te bemachtigen voor zowel de 1000 als 1500 meter, bereidde zich afgelopen zomer niet alleen op de traditionele manier voor op het schaatsseizoen. De 30-jarige Deventenaar zat ook in de tv-studio en beklom een van de mooiste bergen van Europa. ,,Soms moet je niet al te panisch doen”, aldus de olympisch kampioen van Peking.",
      content: null,
      pubDate: "2022-10-07 06:45:32",
      image_url:
        "https://images0.persgroep.net/rcs/zbaZ7gG_gFIHQXMlB36HeFzSeyw/diocontent/222304913/_fitwidth/400/?appId=21791a8992982cd8da851550a453bd7f&quality=0.7",
      source_id: "ad",
      country: ["netherland"],
      category: ["sports"],
      language: "dutch",
    },
    {
      title:
        "LNG-Terminal in Hamburg wird viel kleiner – wenn es überhaupt kommt",
      link: "https://www.t-online.de/region/hamburg/id_100062736/lng-terminal-in-hamburg-wird-viel-kleiner-wenn-es-ueberhaupt-kommt.html",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Hamburg gelingt wohl doch nicht der große Wurf beim Thema Energieversorgung. Berichten zufolge stutzt die Stadt ihre Pläne für ein LNG-Terminal zurecht.",
      content: null,
      pubDate: "2022-10-07 06:45:32",
      image_url:
        "https://images.t-online.de/2021/06/88516408v3/0x343:1504x845/fit-in/0x0/das-mittlerweile-stillgelegte-kohlekraftwerk-moorburg-archivbild-der-senat-hat-schon-eine-neue-idee-zur-weiternutzung.jpg",
      source_id: "t-online",
      country: ["germany"],
      category: ["top"],
      language: "german",
    },
    {
      title: "Moverse en la ciudad, odisea para millones de latinoamericanos",
      link: "https://www.milenio.com/opinion/juan-pablo-salazar/columna-juan-pablo-salazar/moverse-en-la-ciudad-odisea-para-millones-de-latinoamericanos",
      keywords: null,
      creator: ["Juan Pablo Salazar"],
      video_url: null,
      description:
        "En Am�rica Latina y el Caribe existen unas 71 millones de personas con discapacidad (aproximadamente el 12.6 por ciento de la poblaci�n), y muchas de ellas enfrentan barreras de infraestructura y transporte que convierten sus viajes cotidianos en una aut�ntica odisea: andenes no adaptados con rampas ni canaletas, se�alizaciones no inclusivas o accesos restringidos.Alrededor del 50 por ciento de la poblaci�n con discapacidad de la regi�n est� en edad de trabajar, pero la mayor�a est� desempleada o excluida del mercado laboral. En muchas ocasiones, la falta de adaptaci�n de las infraestructuras y de los servicios de transporte p�blico hacen que las personas con discapacidad deben buscar medios de movilidad alternativos, principalmente privados como taxis, con el gasto extra que eso supone, por no hablar de los condicionantes en sus desplazamientos y de las barreras de acceso a sus derechos.Uno de los proyectos que est� tratando de asegurar la accesibilidad universal en la regi�n es ?Bogot� al derecho?, liderado por la Alcald�a y por CAF. Actualmente, los cerca de 245 mil habitantes de Bogot� que tienen alguna discapacidad realizan 1.2 millones de viajes. La mayor�a usan las veredas (un 41 por ciento), mientras que otros van en TransMilenio (11.7 por ciento) y SITP zonal (11.6 por ciento). Con el proyecto se pretende crear una ruta clara para lograr 100 por ciento accesibilidad universal en la infraestructura peatonal, la conectividad, el Sistema Distrital de Cuidado y el Sistema Distrital de Parques. Los gobiernos locales suelen tener buenas intenciones pero no acostumbran llevar a cabo ninguna medida porque lo que falta es inabarcable. La deuda hist�rica con las personas con discapacidad es muy grande. Para asegurar la eficiencia en las intervenciones p�blicas, es imprescindible crear un esquema institucional para el diagn�stico, gesti�n, administraci�n, priorizaci�n, ejecuci�n de obras de infraestructura peatonal para lograr una accesibilidad universal, as� como crear esquemas de financiaci�n para la construcci�n, mejoramiento y conservaci�n de la infraestructura peatonal y sistemas de monitoreo. Otro proyecto que promueve una movilidad segura, accesible, inclusiva y sostenible, esta a trav�s del uso de datos y tecnolog�a, es ?100 Preguntas en Movilidad Urbana y Transporte? que ha identificado las preguntas m�s apremiantes para responder a los desaf�os de movilidad. La iniciativa, desarrollada por GovLab de NYU, junto con CAF, TUMI y NUMO, considera que las ciudades necesitan aprender a usar sus datos para informar y justificar mejor las decisiones de pol�tica p�blica que se toman en torno al desarrollo urbano, el transporte limpio, la accesibilidad a oportunidades econ�micas y la calidad de vida en los centros urbanos. Seg�n Stefaan Verhulst, cofundador y director del Programa de datos del GovLab de la Escuela de Ingenier�a Tandon en NYU, es necesario que nos basemos m�s en los datos para tomar decisiones informadas en la planificaci�n de la movilidad urbana y en el desarrollo de soluciones innovadoras y sostenibles, para as� garantizar el beneficio com�n. Seg�n la encuesta de necesidades y prioridades de transporte local de las personas con discapacidad ?realizada en 39 pa�ses por la Alianza Global de Ambientes y Tecnolog�as Accesibles (GAATES por su sigla en ingl�s)? se determinaron los desaf�os en el transporte: 47 por ciento declar� veh�culos de transporte p�blico inaccesibles; 35 por ciento actitudes negativas de los conductores y resto del personal; 26 por ciento falta de disponibilidad del transporte p�blico en general; y 25 por ciento aceras desniveladas o rotas entre otras barreras. Si bien se han realizado algunas reformas en los sistemas de transporte p�blico en Am�rica Latina y el Caribe para incluir a las personas con discapacidad, la regi�n sigue teniendo una deuda hist�rica para contemplar la accesibilidad universal de forma integral en las ciudades.*Juan Pablo SalazarCoordinador de la Unidad de Inclusi�n en el Banco de Desarrollo de Am�rica Latina, CAF",
      content: null,
      pubDate: "2022-10-07 06:45:18",
      image_url: null,
      source_id: "milenio",
      country: ["mexico"],
      category: ["top"],
      language: "spanish",
    },
    {
      title:
        "กลุ่มปตท. ยกระดับอุตฯ การแพทย์ ผลิตผ้าไม่ถักไม่ทอ ดันไทยสู่ Medical Hub",
      link: "https://hoonsmart.com/archives/274454",
      keywords: ["Breaking News", "IRPC", "PTT"],
      creator: ["007"],
      video_url: null,
      description:
        "HoonSmart.com>>กลุ่มปตท. เปิดโรงงานผลิตผ้าไม่ถักไม่ทอ (non-woven fabric) ของ “อินโนโพลีเมด” ผลิตวัตถุดิบสำหรับวัสดุสิ้นเปลืองทางการแพทย์ ลดพึ่งพาการนำเข้า ยกระดับอุตสาหกรรมทางการแพทย์ – ดันไทยก้าวสู่ Medical Hub",
      content:
        "HoonSmart.com>>กลุ่มปตท. เปิดโรงงานผลิตผ้าไม่ถักไม่ทอ (non-woven fabric) ของ “อินโนโพลีเมด” ผลิตวัตถุดิบสำหรับวัสดุสิ้นเปลืองทางการแพทย์ ลดพึ่งพาการนำเข้า ยกระดับอุตสาหกรรมทางการแพทย์ – ดันไทยก้าวสู่ Medical Hub นายอรรถพล ฤกษ์พิบูลย์ ประธานเจ้าหน้าที่บริหารและกรรมการผู้จัดการใหญ่ บริษัท ปตท. จำกัด (PTT) นายกฤษณ์ อิ่มแสง ประธานเจ้าหน้าที่บริหารและกรรมการผู้จัดการใหญ่ บริษัท ไออาร์พีซี จำกัด (IRPC) และ ดร.บุรณิน รัตนสมบัติ ประธานเจ้าหน้าที่ปฏิบัติการกลุ่มธุรกิจใหม่และโครงสร้างพื้นฐาน บริษัท ปตท. และประธานกรรมการ บริษัท อินโนบิก (เอเซีย) จำกัด (อินโนบิก) ร่วมในพิธีเปิดโรงงานผลิตผ้าไม่ถักไม่ทอ (non-woven fabric) ได้แก่ ผ้าเมลต์โบลน (M) ผ้าสปันบอนด์ (S) และผ้าไม่ถักไม่ทอแบบหลายชั้น (SS, SMS, SMMS) ของ “บริษัท อินโนโพลีเมด จำกัด”(อินโนโพลีเมด) กำลังการผลิตประมาณ 5,600 ตันต่อปี ณ เขตประกอบการอุตสาหกรรม ไออาร์พีซี จ.ระยอง เริ่มดำเนินการผลิตเชิงพาณิชย์ตั้งแต่ไตรมาส 2 ปี 2565 โดย อินโนโพลีเมด ใช้เม็ดพลาสติกพีพี (โพลิโพรพิลีน) ที่ปราศจากสารทาเลต (Phthalate) คิดค้นวิจัยพัฒนาและผลิตโดย ไออาร์พีซี ในการผลิตผ้าไม่ถักไม่ทอ จึงมีความปลอดภัยต่อผู้บริโภค ทั้งนี้ ผ้าเมลต์โบลน มีลักษณะเป็นเส้นใยขนาดเล็ก มีความละเอียดในระดับนาโนเมตรถึงไมโครเมตร ทำให้มีประสิทธิภาพในการกรองสูง ในขณะที่ผ้าสปันบอนด์ และผ้าไม่ถัก ไม่ทอแบบหลายชั้น มีความแข็งแรงสูง ป้องกันของเหลว และเชื้อโรค เหมาะสำหรับนำไปเป็นวัตถุดิบสำหรับการผลิตวัสดุสิ้นเปลืองทางการแพทย์ และผลิตภัณฑ์เพื่อสุขอนามัย ได้แก่ หน้ากากอนามัย ชุดกาวน์ ชุด PPE ผ้าอ้อมเด็กและผู้ใหญ่ รวมถึงแผ่นกรองต่างๆ เป็นต้น บริษัท ไออาร์พีซี จำกัด (IRPC) และบริษัท อินโนบิก (เอเซีย) จำกัด ได้ร่วมทุนก่อตั้ง บริษัท อินโนโพลีเมด จำกัด เพื่อดำเนินธุรกิจวัสดุสิ้นเปลืองทางการแพทย์ของกลุ่ม ปตท. โดยโรงงานผลิตผ้าไม่ถักไม่ทอนี้ เกิดจากการบูรณาการองค์ความรู้ด้านธุรกิจปิโตรเคมี และชีววิทยาศาสตร์ (Life Science) ในการบรรเทาปัญหาการขาดแคลนวัตถุดิบสำหรับการผลิตหน้ากากอนามัย หน้ากาก N95 ชุด PPE และชุดกาวน์ ซึ่งที่ผ่านมาประเทศไทยต้องนำเข้าวัตถุดิบสำหรับผลิตภัณฑ์ดังกล่าวทั้งหมด และเป็นการต่อยอดการวิจัยและพัฒนาผลิตภัณฑ์ทางการแพทย์โดยคนไทย ลดการนำเข้า สร้างความมั่นคงทางด้านสาธารณสุขและสร้างความแข็งแกร่งให้กับอุตสาหกรรมทางการแพทย์ สอดคล้องกับยุทธศาสตร์การส่งเสริมพัฒนาอุตสาหกรรมเป้าหมายของประเทศ New S-Curve ทางด้านการแพทย์ครบวงจร (Medical Hub) ของไทย",
      pubDate: "2022-10-07 06:45:13",
      image_url: null,
      source_id: "hoonsmart",
      country: ["thailand"],
      category: ["business"],
      language: "thai",
    },
    {
      title:
        "Avec une remise folle de -53%, cette clé USB SanDisk Ultra Luxe 128 Go est une pépite rare sur Amazon 🔥",
      link: "https://www.journaldugeek.com/bon-plan/avec-une-remise-folle-de-53-cette-cle-usb-sandisk-ultra-luxe-128-go-est-une-pepite-rare-sur-amazon/",
      keywords: ["Bons plans", "Amazon", "bon plan"],
      creator: ["Sebastian Danila"],
      video_url: null,
      description:
        "Amazon est en roue libre. Ce dernier affiche une réduction dingue de -53% sur l'excellente clé USB à double connectique SanDisk Ultra Luxe d'une capacité de 128 Go. Son prix n'a jamais été aussi bas. Avec une remise folle de -53%, cette clé USB SanDisk Ultra Luxe 128 Go est une pépite rare sur Amazon 🔥",
      content: null,
      pubDate: "2022-10-07 06:45:11",
      image_url: null,
      source_id: "journaldugeek",
      country: ["france"],
      category: ["technology"],
      language: "french",
    },
    {
      title:
        "Le rivelazioni dell’intelligence Usa al Nyt: “Crediamo che gli ucraini abbiano ucciso Darya Dugina”",
      link: "https://www.tpi.it/esteri/intelligence-usa-al-nyt-crediamo-ucraini-abbiano-ucciso-darya-dugina-20221007937458/",
      keywords: null,
      creator: ["Lara Tomasetta"],
      video_url: null,
      description:
        "Le agenzie di intelligence statunitensi sono convinte che settori del governo ucraino abbiano autorizzato un attentato con autobomba vicino Mosca lo scorso agosto nel quale è rimasta uccisa Darya Dugina, figlia dell’ideologo ultra-nazionalista russo, Alexander Dugin. A riportare la notizia è il New York Times, sottolineando che gli Stati Uniti non hanno fornito alcuna assistenza, […]",
      content:
        "Le agenzie di intelligence statunitensi sono convinte che settori del governo ucraino abbiano autorizzato un attentato con autobomba vicino Mosca lo scorso agosto nel quale è rimasta uccisa Darya Dugina, figlia dell’ideologo ultra-nazionalista russo, Alexander Dugin. A riportare la notizia è il New York Times, sottolineando che gli Stati Uniti non hanno fornito alcuna assistenza, di intelligence o logistica, nell’attentato. Funzionari americani in seguito hanno ammonito i funzionari ucraini per l’assassinio, ha detto il Times. Le conclusioni dell’intelligence Usa riguardo alla responsabilità di Kiev nell’attentato a Dugina sono state comunicate la scorsa settimana all’amministrazione Biden. I funzionari americani che hanno parlato con il New York Times non hanno rivelato quali funzionari del governo ucraino siano i mandanti dell’omicidio della Dugina o se il presidente Voldymyr Zelensky fosse al corrente. Alcuni ritengono, inoltre, che il vero obiettivo dell’attentato fosse il padre. L’ultranazionalista Dugin da mesi esorta Mosca a intensificare la sua guerra contro l’Ucraina e da sempre è uno dei principali sostenitori di una Russia aggressiva e imperialista. Interpellato dal prestigioso quotidiano statunitense il consigliere di Zelensky, Mykhailo Podolyak, ha ribadito che il governo di Kiev non è coinvolto nella morte della figlia dell’ultranazionalista. “In tempo di guerra ogni omicidio deve avere un senso, soddisfare uno scopo specifico, tattico o strategico. Dugina non è un obiettivo né tattico né strategico per l’Ucraina”, ha detto. Gli Usa, scrive il Nyt, sono rimasti frustrati dalla mancanza di trasparenza dell’Ucraina riguardo alla vicenda, soprattutto perché da parte statunitense c’è sempre stato un grande sforzo di condividere le informazioni di intelligence con gli ucraini.",
      pubDate: "2022-10-07 06:45:07",
      image_url: "https://www.tpi.it/app/uploads/2022/10/4-1024x538.jpg",
      source_id: "tpi",
      country: ["italy"],
      category: ["top"],
      language: "italian",
    },
    {
      title: "Investe un gregge di pecore sulla Statale 126, traffico bloccato",
      link: "https://www.unionesarda.it/news-sardegna/medio-campidano/investe-un-gregge-di-pecore-sulla-statale-126-traffico-bloccato-udwgepd7",
      keywords: ["Medio Campidano"],
      creator: ["Johanne Cesarano"],
      video_url: null,
      description: null,
      content: null,
      pubDate: "2022-10-07 06:45:06",
      image_url:
        "https://immagini.unionesarda.it/version/c:YTQyNWUyOTgtOGI2Mi00:MDNmZWNj/image.jpg?w=900",
      source_id: "unionesarda",
      country: ["italy"],
      category: ["top"],
      language: "italian",
    },
    {
      title:
        "Törnek előre az ukrán csapatok, nőnek az atomháborús aggályok - Háborús híreink pénteken",
      link: "https://www.portfolio.hu/global/20221007/tornek-elore-az-ukran-csapatok-nonek-az-atomhaborus-aggalyok-haborus-hireink-penteken-571497",
      keywords: ["Globál"],
      creator: null,
      video_url: null,
      description:
        'Nem állt meg az ukrán csapatok előretörése, az ország déli részén Herszon régióban aratott győzelem árnyalja a Kreml azon narratíváját miszerint Ukrajna mintegy negyedét annektálta. Bekerült az Ukrajnától elcsatolt Zaporizzsja és Herszon megye, valamint a Donyecki és a Luhanszki Népköztársaság az orosz alkotmány szövegébe, amelyben így 89 közigazgatási egység szerepel. Joe Biden arra figyelmeztetett, hogy a világot "Armageddon" fenyegeti, ha Vlagyimir Putyin taktikai atomfegyverrel próbálja megnyerni az ukrajnai háborút.',
      content: null,
      pubDate: "2022-10-07 06:45:00",
      image_url:
        "https://pcdn.hu/articles/images-xl/u/k/r/ukrajna-orosz-haboru-558751.jpg",
      source_id: "portfolio",
      country: ["hungary"],
      category: ["top"],
      language: "hungarian",
    },
    {
      title:
        "Hund ist außer sich vor Freude bei Wiedersehen: „Immer wenn ich abends von der Arbeit heimkomme“",
      link: "https://www.tz.de/leben/tiere/dankbarkeit-hund-verschwunden-wiedersehen-besitzerin-tierklinik-video-tiktok-weinen-zr-91826870.html?cmp=defrss",
      keywords: null,
      creator: ["Jasmin Farah"],
      video_url: null,
      description:
        "Eine Frau vermisst 21 Tage ihren Hund. Sie erhält einen Anruf aus der Tierklinik. Die hat einen gefunden. Ob es ihr Hund ist, zeigt sich schnell.",
      content: null,
      pubDate: "2022-10-07 06:45:00",
      image_url:
        "https://www.tz.de/bilder/2022/10/03/91826870/29977566-frau-umarmung-hund-2mNl96A9Yj01.jpg",
      source_id: "tz",
      country: ["germany"],
      category: ["top"],
      language: "german",
    },
    {
      title:
        "Mercato - PSG : Le Real Madrid lâche une terrible confidence sur Mbappé",
      link: "https://le10sport.com/football/mercato/mercato-psg-le-real-madrid-lache-une-terrible-confidence-sur-mbappe-616592",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Si Kylian Mbappé a décidé de snober le Real Madrid il y a quelques mois de cela afin de prolonger au PSG, le feuilleton ne serait pas pour autant terminé. En effet, suite aux dernières révélations…",
      content: null,
      pubDate: "2022-10-07 06:45:00",
      image_url:
        "https://le10static.com/img/cache/article/100x63/0000/0021/214245.jpeg",
      source_id: "le10sport",
      country: ["france"],
      category: ["sports"],
      language: "french",
    },
    {
      title: "Hurrikán készítette akvarell",
      link: "https://ng.24.hu/fold/2022/10/07/hurrikan-keszitette-akvarell/",
      keywords: ["Föld", "hurrikán", "tengervíz"],
      creator: ["Landy-Gyebnár Mónika"],
      video_url: null,
      description:
        "Az Ian hurrikán hatására a Florida környéki tenger színpompás vízfestménnyé változott. The post Hurrikán készítette akvarell first appeared on National Geographic.",
      content:
        "Bár a hurrikánokról általában csak a negatív hírek érkeznek, az Earth Observatory a műholdak segítségével szemmel tartott trópusi ciklonok érdekesebb arcát is igyekszik bemutatni, nem csak az általuk okozott károkat. 2022. szeptember utolsó napjaiban a szezon második nagy hurrikánja, az Ian azonban jelentős károkat okozott: a 4-es kategóriába sorolt vihar 240 kilométer per órás széllel csapott le Floridára. A szélen kívül azonban a víz is fontos tényező volt: akár a hurrikánnal érkező csapadék, akár a hatására vihardagályként a partra nyomuló tengervíz formájában. A hurrikán előtt csak egy kevés helyen volt színes a víz. Forrás: Earth Observatory   A szél és az általa megmozgatott víz azonban művészi vénával is rendelkezik a felvételek tanúsága szerint: az Ian hatására ragyogó színekben pompázó mintázat jelent meg a Florida-közeli tengereken. Az ESA Sentinel-2 műholdjának mérései alapján mintegy 2 méteres vihardagály nyomult be a szárazföldre, és a víz visszahúzódásakor lemosta onnan az oldott szerves anyagok egy részét is. A félsziget partját mutató felvételen ezt láthatjuk: a szárazföldi növények maradványai barnásra színezik a vizet, s minden, a tengerbe torkolló vízfolyásnál a tannin ezen barna árnyalatai keveredtek a tengerbe, így a koncentrációtól függő színek születtek. A tengerbe ömlő folyóvizek rengeteg oldott szerves anyagot szállítanak, ezért sötétek. Ez természetes folyamat. Forrás: Earth Observatory A Terra műhold felvételein a tenger kékes-türkizes árnyalatait a hurrikán által felkavart üledékek okozzák. Míg a ciklon érkezése előtt is volt némi zöldes szín a partokhoz közeli vízben, az még jórészt az ott élő tengerifűtelepek zöldjeként látszott. Az Ian utáni (október 1-jén készült) felvételen viszont hatalmas terület vált türkizessé, zöldessé, s a partoknál a már említett tannin miatt barnássá. A végeredmény pedig jelen esetben egy hurrikán festette színpompás akvarell.The post Hurrikán készítette akvarell first appeared on National Geographic.",
      pubDate: "2022-10-07 06:44:55",
      image_url:
        "https://ng.24.hu/uploads/2022/10/florida_tmo_2022274_lrg-1024x561.jpg",
      source_id: "ng_hu",
      country: ["hungary"],
      category: ["science"],
      language: "hungarian",
    },
    {
      title: "La Ni�era Ladrona",
      link: "https://www.milenio.com/opinion/gonzalo-oliveros/columna-gonzalo-oliveros/la-ninera-ladrona",
      keywords: null,
      creator: ["Gonzalo Oliveros"],
      video_url: null,
      description:
        "A finales de la d�cada de los ochenta, la televisi�n p�blica mexicana viv�a un enorme bache de creatividad y presupuesto. Puesta para ser vendida ante la demanda de los entonces poderosos grupos radiof�nicos que deseaban una salida audiovisual hacia figuras como Ferriz de Con y Guti�rrez Viv�, Imevisi�n viv�a sus �ltimos a�os como televisi�n oficial.No obstante, entre sus �ltimos �xitos se encontraba un cartucho que la poderosa Televisa desech� desde su soberbia: Los Simpson.Transmitida por vez primera en la barra del canal cinco, la creaci�n de Matt Groening no fue del inter�s de la empresa de Azc�rraga Milmo, por lo que fue adquirida a un precio envidiable por los entonces canales combo 13 y 7.As�, desde 1991, los Simpson comenzaron su recorrido por la televisi�n mexicana con un �xito relativo que, con el paso de las semana, logr� eclipsar los ratings de XHGC y del Canal de las Estrellas.El primer episodio de los Simpson fue uno que tuvo que rehacerse y que de hecho, oficialmente es el �ltimo de su primera temporada. Su titulo es ?una noche encantadora? pero todo el mundo la conoce como la Ni�era Ladrona.En �l, Homero y Marge deciden salir a cenar tras la recomendaci�n de su terapeuta que ve crisis en el matrimonio y, de hecho, en la familia. Como nadie quiere cuidar a Bart debido a lo problem�tico, Homero llama a una desconocida, la se�ora Botz.Lisa y Bart insisten que hay algo raro en ella, pero la pareja Simpson deciden obviar los reclamos y salen a divertirse.Al final, los ni�os se enteran que Lucile Botzcowski es el nombre real de la ni�era ladrona y quien termina por secuestrar para, despu�s, robar hasta la remolacha en vinagre que se encuentra en el s�tano.As� es la seguridad en el pa�s. Ante la incapacidad que se tiene por parte de las polic�as locales y estatales -ya lav�ndose las manos ante el desastre que se avecina-, el gobierno federal ?sugiere? que la mejor soluci�n ante el caos es que el Ej�rcito tome las riendas con algunos candados? muy parecidos a los que existen hoy.A la mitad de la discusi�n, documentos extra�dos de los archivos digitales de la Secretar�a de la Defensa Nacional demuestran que el ej�rcito ha solapado abusos, sugerido excarcelaciones, torturado, deslizado oportunidades empresariales aunque est�n prohibidas por la ley, encubierto investigaciones y labores de inteligencia que desnudan la infiltraci�n del crimen organizado en cuerpos de seguridad, atendido de forma irregular a funcionarios de gobierno del obradorato y hasta empujado las reformas constitucionales votadas esta semana.Al termino del episodio, Homero encuentra a la Ni�era Ladrona amordazada y, en lugar de esperar a la polic�a, piensa que es culpa de Bart y sus hermanas y la deja ir, incluso con una compensaci�n econ�mica.As� L�pez Obrador con el Ej�rcito esta semana. Pese a las evidencias de espionaje, acoso, tortura, encubrimiento, el presidente decidi� hacerse el omiso a las pruebas y jugar por los caminos que le quedan m�s seguros, los de la descalificaci�n a los datos y el se�alamiento a los contrarios por �l y sus secuaces por todos los medios posible.Cap�tulos despu�s, la ni�era ladrona apareci� de nueva cuenta, primero buscada por la polic�a y, despu�s, en un hospital siqui�trico, con lo que pareciera que la salud pudo m�s con ella que la ley.A veces las caricaturas son aleccionadoras.PortapapelesTatiana Clouthier se fue por la puerta chica. Renunciada o corrida, pero sola. L�pez Obrador no quiso o no pudo despedirse de ella, como no lo hizo con la gran mayor�a que ha dejado su gobierno.No se queda solo, pero cada d�a se queda m�s por un abismo que le hace eco.Gonzalo Oliveros",
      content: null,
      pubDate: "2022-10-07 06:44:32",
      image_url: null,
      source_id: "milenio",
      country: ["mexico"],
      category: ["top"],
      language: "spanish",
    },
    {
      title:
        "Urlaub auf Mallorca: Experte sagt deutliche Veränderungen voraus – Reisende werden es merken",
      link: "https://www.derwesten.de/panorama/vermischtes/urlaub-auf-mallorca-fluege-insel-id300030082.html",
      keywords: ["Vermischtes"],
      creator: null,
      video_url: null,
      description:
        "Nach der Corona-Pandemie ist seit diesem Jahr beim Urlaub auf Mallorca wieder fast alles wie früher – doch ein Experte sagt bereits die nächste Veränderung voraus. Umweltexperten schlagen schon länger Alarm: Wir befinden uns mitten in einer Klimakrise! Und diese wird auch deinen Urlaub auf Mallorca verändern. Urlaub auf Mallorca: Bewusstsein für die Schädlichkeit des […]",
      content: null,
      pubDate: "2022-10-07 06:44:28",
      image_url:
        "https://www.derwesten.de/wp-content/uploads/sites/8/2022/10/Urlaub-auf-Mallorca.jpg?w=1568",
      source_id: "derwesten",
      country: ["germany"],
      category: ["top"],
      language: "german",
    },
    {
      title: "Keine Audienz beim Papst – Tourist zerstört Büsten",
      link: "https://www.t-online.de/nachrichten/panorama/buntes-kurioses/id_100062752/keine-audienz-beim-papst-tourist-zerstoert-buesten.html",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Der Versuch, zum Papst vorzudringen, verlief für einen Touristen erfolglos. Er ließ seinen Frust an wertvollen Exponaten aus.",
      content: null,
      pubDate: "2022-10-07 06:44:25",
      image_url:
        "https://images.t-online.de/2022/10/cJyiMI-NWNY4/0x352:4000x2250/fit-in/0x0/roemische-marmor-skulpturen-chiaramonti-museum-vatikanstadt-rom-latium-italien-europa-roman-marble-sculptures-chiaramonti-museum-vatican-city-rome-lazio-italy-europe-copyright-imagebroker-kimxpetersen-iblkip04826243-jpg.jpg",
      source_id: "t-online",
      country: ["germany"],
      category: ["top"],
      language: "german",
    },
    {
      title: "Ciberseguridad",
      link: "https://www.milenio.com/opinion/hector-romero-fierro/auditoria-ciudadana/ciberseguridad",
      keywords: null,
      creator: ["H�ctor A. Romero Fierro"],
      video_url: null,
      description:
        "Cuando hablamos de ciberespacio, hablamos de ?un entorno digital constituido por redes inform�ticas y de telecomunicaciones, en el que se comunican e interact�an las personas y permite el ejercicio de sus derechos y libertades como hacen en el mundo f�sico?, as� lo defini� la Estrategia Nacional de Ciberseguridad de 2019, y al hablar de este espacio y de los derechos humanos, cuidado de la propiedad intelectual, informaci�n sensible y personal de los usuarios y patrimonio de estos, tenemos que hablar tambi�n de la ciberseguridad que la OTAN la define como la aplicaci�n de medidas de seguridad para proteger las infraestructura de los sistemas de informaci�n y comunicaciones frente a los ciberataques?Somos, principalmente por falta de cultura, uno de los pa�ses mas atacados por una nueva figura de delincuentes,que ahora clasificamos como ciberdelincuentes, y cuando los ataques ya atentan contra el Estado, podemos hablar de ciberterrorismo.El problema es enorme, solo al final del sexenio de Pe�a Nieto, M�xico reportaba que el cibercrimen costaba a M�xico m�s de 3 mil millones de d�lares al a�o, generando estos delitos cibern�ticos un da�o econ�mico mayor al del crimen organizado en conjunto, lo que nos ubicaba en el lugar 17 a nivel mundial con m�s perdidas en el rubro.Por ello Pe�a Nieto implement� la Estrategia Nacional de Ciberseguridad al comprender que la ciberseguridad es un tema de seguridad nacional, que afecta tanto al ciudadano, como al sector p�blico y privado, por lo que ten�a que ser visto como una prioridad en los planes y proyectos del gobierno, pero lamentablemente el gobierno de L�pez no lo entendi� y tiro todo el esfuerzo en este tema por la borda, al no darle seguimiento a los programas e iniciativas de ciberseguridad que se hab�an estado desarrollando en M�xico durante los �ltimos a�os.Dicen que ?Ahogado el ni�o, a tapar el pozo?, pero esto no lo entendieron en la CuatroT� ya que los ciberdelincuentes les han intervenido bases de datos de Pemex, del Banco de M�xico, de la Secretar�a de Econom�a, de la CFE, y el colmo, recientemente las bases de datos de la Defensa Nacional.Desde el inicio del sexenio debieron tomar activamente la Ciberdefensa, entendida esta como el ?Conjunto de acciones, recursos y mecanismos del estado en materia de seguridad nacional para prevenir, identificar y neutralizar toda ciberamenaza o ciberataque que afecte a la infraestructura cient�fica nacional?Nuestro pa�s tiene la obligaci�n de proteger su soberan�a nacional de cualquier amenaza que pudiera poner en peligro la seguridad de su territorio, su infraestructura o su naci�n, cosa que ignor�, insisto, el gobierno actual. Ya desde enero del presente a�o la Auditoria Superior hab�a advertido a la Sedena, que la confidencialidad de su informaci�n se encontraba en riesgo, y que adem�s no contaban con un protocolo de actuaci�n ante la posibilidad de ataques cibern�ticos.Por no atender, un grupo internacional de hackers autonombrado Guacamaya logro infiltrar las redes de la defensa Nacional y logro descargar informaci�n estrat�gica, correos y documentos del 2016 a la fecha. Documentos que pegaron debajo de la l�nea de flotaci�n de la CuatroT� aunque L�pez intente minimizarlo, sabe que la filtraci�n de estos documentos es extremadamente grave para su gobierno.Ahora dicen que este mes legislan ya, en esta materia. �No ser� demasiado tarde?H�ctor Romero Fierro",
      content: null,
      pubDate: "2022-10-07 06:44:21",
      image_url: null,
      source_id: "milenio",
      country: ["mexico"],
      category: ["top"],
      language: "spanish",
    },
    {
      title:
        "Google Pixel 7 Pro พร้อมทำตลาดแล้ว ราคาราว 33,690 บาท มาพร้อมกล้อง 48MP Telephoto ซูม 5 เท่า ใช้ชิป Tensor G2",
      link: "https://www.flashfly.net/wp/403807",
      keywords: [
        "Android",
        "NEWS",
        "Smartphone",
        "Google",
        "Pixel 7",
        "Pixel 7 Pro",
      ],
      creator: ["Content Team"],
      video_url: null,
      description:
        "หลังจากเผยโฉม Pixel 7 series ตั้งแต่งาน Google I/O 2022 ในเดือนพฤษภาคมที่ผ่านมา ในที่สุด Google ก็พร้อมวางจำหน่ายเรือธง Pixel 7 Pro อย่างทางการแล้ว ในราคาเริ่มต้น 899 ดอลลาร์สหรัฐ หรือราว 33,690 บาท มีให้เลือก 3 สี ได้แก่ Obsidian (สีดำ), Snow (สีขาว/สีเงิน) และ Hazel (สีเขียว/สีทอง)",
      content:
        "หลังจากเผยโฉม Pixel 7 series ตั้งแต่งาน Google I/O 2022 ในเดือนพฤษภาคมที่ผ่านมา ในที่สุด Google ก็พร้อมวางจำหน่ายเรือธง Pixel 7 Pro อย่างทางการแล้ว ในราคาเริ่มต้น 899 ดอลลาร์สหรัฐ หรือราว 33,690 บาท มีให้เลือก 3 สี ได้แก่ Obsidian (สีดำ), Snow (สีขาว/สีเงิน) และ Hazel (สีเขียว/สีทอง) Pixel 7 Pro มาพร้อมจอแสดงผล QHD+ OLED ขนาด 6.7 นิ้ว รองรับอัตราการรีเฟรช 10 – 120Hz ป้องกันรอยด้วยกระจก กระจก Gorilla Glass Victus ได้รับมาตรฐานป้องกันฝุ่นและน้ำ IP68 มีขนาดตัวเครื่อง 162.9 x 76.6 x 8.9 มิลลิเมตร น้ำหนัก 212 กรัม Pixel 7 Pro วางกล้องหลัง 3 ตัว ประกอบด้วย กล้องหลัก 50 ล้านพิกเซล รูรับแสง f/1.85, กล้อง Ultra Wide 12 ล้านพิกเซล มุมมองกว้าง 114 องศา รูรับแสง f/2.2 และ กล้อง Telephoto 48 ล้านพิกเซล รูรับแสง f/3.5 รองรับการซูมแบบไม่สูญเสียรายละเอียดสูงสุด 5x และซูมสูงสุด 30x ด้วย Super Res Zoom อีกทั้งยังมีระบบป้องกันภาพสั่นไหวทั้ง OIS และ EIS รวมถึงระบบออโต้โฟกัสแบบตรวจจับด้วยเลเซอร์ (LDAF) สำหรับกล้องหน้า มีความละเอียด 10.8 ล้านพิกเซล รูรับแสง f/2.2 ด้านประสิทธิภาพ Pixel 7 Pro ใช้ชิปประมวลผล Tensor G2 ที่สร้างขึ้นจากกระบวนการผลิต 4 นาโนเมตร ความจำ RAM 12GB แบบ LPDDR5 จับคู่กับ ROM 128/256/512GB แบบ UFS 3.1 ความจุแบตเตอรี่ 5,000mAh รองรับชาร์จเร็ว 23W ชาร์จไร้สาย 20W+ และสามารถชาร์จแบตเตอรี่ให้อุปกรณ์อื่นแบบไร้สายได้ (Reverse Wireless Charging) Google จะเริ่มจัดส่ง Pixel 7 Pro ตั้งแต่วันที่ 13 ตุลาคม 2022 เป็นต้นไป แต่สามารถหาซื้อได้ในไม่กี่ประเทศ",
      pubDate: "2022-10-07 06:44:06",
      image_url: null,
      source_id: "flashfly",
      country: ["thailand"],
      category: ["technology"],
      language: "thai",
    },
    {
      title:
        "Szijjártó Péter: Magyarország mára az elektromos autóipar európai fellegvára lett",
      link: "https://www.szon.hu/hazai-gazdasag/2022/10/szijjarto-peter-magyarorszag-mara-az-elektromos-autoipar-europai-fellegvara-lett?utm_source=hirstart&utm_medium=referral&utm_campaign=hiraggregator",
      keywords: ["alapértelmezett"],
      creator: null,
      video_url: null,
      description:
        "A magyar külügyminiszter koreai elektromos autóipari vállalatvezetőkkel találkozott.",
      content: null,
      pubDate: "2022-10-07 06:43:45",
      image_url: null,
      source_id: "szon",
      country: ["hungary"],
      category: ["entertainment"],
      language: "hungarian",
    },
    {
      title:
        "Geniales Brötchen-Rezept: Mit dem Übernacht-Trick werden sie frisch wie vom Bäcker",
      link: "https://www.berliner-kurier.de/rezepte/geniales-broetchen-rezept-mit-dem-uebernacht-trick-werden-sie-frisch-wie-vom-baecker-li.274259",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Mit dem Übernacht-Tick müssen Sie morgens nicht ewig wegen der Teigruhe warten. Wir verraten das Rezept für die perfekten Frühstücks-Brötchen.",
      content: null,
      pubDate: "2022-10-07 06:43:36",
      image_url: null,
      source_id: "berliner-kurier",
      country: ["germany"],
      category: ["top"],
      language: "german",
    },
    {
      title:
        "Waffenexporte nach Saudi-Arabien: Grüne lehnen sich gegen Annalena Baerbock und Robert Habeck auf",
      link: "https://www.spiegel.de/politik/deutschland/waffenexporte-nach-saudi-arabien-gruene-lehnen-sich-gegen-annalena-baerbock-und-robert-habeck-auf-a-782151e4-f26b-4946-b30e-fdfbf458844d#ref=rss",
      keywords: null,
      creator: null,
      video_url: null,
      description:
        "Mit ihrem Ja zu Rüstungsgütern für Saudi-Arabien ziehen die grünen Minister den Zorn vieler Grüner auf sich. Ein Parteitagsbeschluss soll nun einen Kurswechsel er zwingen.",
      content:
        "Mit ihrem Ja zu Rüstungsgütern für Saudi-Arabien ziehen die grünen Minister den Zorn vieler Grüner auf sich. Ein Parteitagsbeschluss soll nun einen Kurswechsel er zwingen.",
      pubDate: "2022-10-07 06:43:33",
      image_url:
        "https://cdn.prod.www.spiegel.de/images/c778963e-7c79-492c-a5e4-f8296bf44428_w520_r2.08_fpx37.32_fpy49.99.jpg",
      source_id: "spiegel",
      country: ["germany"],
      category: ["politics"],
      language: "german",
    },
  ];
  constructor() {
    super();
    this.state = {
      news: this.article,
      loading: false,
    };
  }
  // componentDidMount = async () => {
  //   let news = await fetch(
  //     `https://newsdata.io/api/1/news?apikey=pub_12002c8e6df9a490b63a54c68d2c5a2238546&language=en&page=1`
  //   );
  //   let parsedNews = await news.json();
  //   console.log(parsedNews);
  //   this.setState({ news: parsedNews.results });
  // };
  render() {
    return (
      <>
        <h1 style={{ textTransform: "capitalize" }}>top headlines today </h1>
        <div className="news">
          {this.state.news.map((element, index) => {
            return <NewsItem key={index} news={element} />;
          })}
        </div>
      </>
    );
  }
}

export default News;
