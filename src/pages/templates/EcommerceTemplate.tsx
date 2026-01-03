import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingBag, 
  Star, 
  Heart, 
  Share2, 
  ChevronRight, 
  ShieldCheck, 
  Truck, 
  ArrowLeft,
  Minus,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const EcommerceTemplate = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("black");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const product = {
    title: "Blaze Runner v4",
    price: 189.00,
    rating: 4.8,
    reviews: 124,
    description: "Engineered for maximum energy return. The Blaze Runner v4 features our proprietary ReactFoam™ technology, delivering a snappy, responsive feel that propels you forward with every stride.",
    colors: [
      { name: "Midnight Black", value: "black", class: "bg-slate-900" },
      { name: "Cloud White", value: "white", class: "bg-slate-100" },
      { name: "Electric Blue", value: "blue", class: "bg-blue-600" }
    ],
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=1000",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000"
    ]
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 font-sans selection:bg-rose-500/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-[#020617]/80 backdrop-blur-lg border-b border-slate-200 dark:border-white/5 h-16 flex items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-8">
           <Link to="/templates" className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              BACK
           </Link>
           <span className="font-black tracking-tighter text-xl">BLAZE<span className="text-rose-500">.STORE</span></span>
           <div className="hidden md:flex gap-6 text-sm font-bold text-slate-500">
              <span className="text-slate-900 dark:text-white cursor-pointer">Men</span>
              <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">Women</span>
              <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">Kids</span>
              <span className="hover:text-slate-900 dark:hover:text-white cursor-pointer transition-colors">Sale</span>
           </div>
        </div>
        <div className="flex items-center gap-4">
           <div className="relative cursor-pointer hover:bg-slate-100 dark:hover:bg-white/5 p-2 rounded-full transition-colors">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-rose-500 text-[10px] font-bold text-white flex items-center justify-center">2</span>
           </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-12">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left Column - Images */}
            <div className="space-y-4">
               <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-white/5 relative group">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={activeImage}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      src={product.images[activeImage]}
                      className="w-full h-full object-cover"
                      alt={product.title}
                    />
                  </AnimatePresence>
                  <div className="absolute top-6 left-6 py-1 px-3 bg-white dark:bg-black rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                     New Arrival
                  </div>
                  <div className="absolute bottom-6 right-6 flex gap-2">
                     <Button size="icon" variant="secondary" className="rounded-full shadow-xl">
                        <Share2 className="w-4 h-4" />
                     </Button>
                     <Button size="icon" variant="secondary" className="rounded-full shadow-xl text-rose-500">
                        <Heart className="w-4 h-4 fill-rose-500" />
                     </Button>
                  </div>
               </div>
               <div className="grid grid-cols-4 gap-4">
                  {product.images.map((img, i) => (
                    <div 
                      key={i} 
                      onClick={() => setActiveImage(i)}
                      className={cn(
                        "aspect-square rounded-2xl overflow-hidden cursor-pointer border-2 transition-all",
                        activeImage === i ? "border-slate-900 dark:border-white ring-2 ring-slate-900/20 dark:ring-white/20" : "border-transparent opacity-60 hover:opacity-100"
                      )}
                    >
                       <img 
                         src={img.replace("w=1000", "w=200")} 
                         className="w-full h-full object-cover" 
                         alt="Thumbnail"
                         loading="lazy"
                         decoding="async"
                       />
                    </div>
                  ))}
               </div>
            </div>

            {/* Right Column - Details */}
            <div className="py-8 space-y-10">
               <div className="space-y-4">
                  <div className="flex items-center justify-between">
                     <h1 className="text-4xl md:text-5xl font-black tracking-tight">{product.title}</h1>
                     <div className="text-2xl font-bold text-rose-500">${product.price}</div>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="flex gap-0.5 text-amber-400">
                        {[...Array(5)].map((_, i) => (
                           <Star key={i} className={cn("w-4 h-4", i < 4 && "fill-amber-400")} />
                        ))}
                     </div>
                     <span className="text-sm font-medium text-slate-500 underline decoration-slate-300 underline-offset-4 cursor-pointer">
                        {product.reviews} verified reviews
                     </span>
                  </div>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
                     {product.description}
                  </p>
               </div>

               {/* Selectors */}
               <div className="space-y-8 py-8 border-y border-slate-200 dark:border-white/5">
                  <div className="space-y-4">
                     <span className="text-sm font-bold uppercase tracking-widest text-slate-500">Color</span>
                     <div className="flex gap-4">
                        {product.colors.map(color => (
                           <div 
                             key={color.value}
                             onClick={() => setSelectedColor(color.value)}
                             className={cn(
                               "w-12 h-12 rounded-full cursor-pointer flex items-center justify-center transition-all",
                               selectedColor === color.value ? "ring-2 ring-offset-2 ring-slate-900 dark:ring-white dark:ring-offset-black" : "hover:scale-110"
                             )}
                           >
                              <div className={cn("w-10 h-10 rounded-full border border-black/10 shadow-sm", color.class)} />
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="space-y-4">
                     <div className="flex justify-between">
                        <span className="text-sm font-bold uppercase tracking-widest text-slate-500">Select Size</span>
                        <span className="text-xs font-bold text-rose-500 underline cursor-pointer">Size Guide</span>
                     </div>
                     <div className="grid grid-cols-3 gap-3">
                        {product.sizes.map(size => (
                           <button
                             key={size}
                             onClick={() => setSelectedSize(size)}
                             className={cn(
                               "h-12 rounded-xl font-bold text-sm border-2 transition-all",
                               selectedSize === size 
                                 ? "border-slate-900 dark:border-white bg-slate-900 dark:bg-white text-white dark:text-black" 
                                 : "border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
                             )}
                           >
                              {size}
                           </button>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Actions */}
               <div className="space-y-6">
                  <div className="flex gap-4">
                     <div className="h-16 w-32 rounded-2xl border-2 border-slate-200 dark:border-white/10 flex items-center justify-between px-4 font-bold text-lg">
                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="hover:text-rose-500 transition-colors">
                           <Minus className="w-4 h-4" />
                        </button>
                        {quantity}
                        <button onClick={() => setQuantity(quantity + 1)} className="hover:text-rose-500 transition-colors">
                           <Plus className="w-4 h-4" />
                        </button>
                     </div>
                     <Button className="flex-1 h-16 rounded-2xl text-lg font-black tracking-tight shadow-xl shadow-rose-500/20 bg-rose-500 hover:bg-rose-600 border-none">
                        Add to Cart <ChevronRight className="ml-2 w-5 h-5" />
                     </Button>
                  </div>
                  
                  <div className="flex items-center justify-center gap-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
                     <div className="flex items-center gap-2">
                        <Truck className="w-4 h-4" /> Free Shipping
                     </div>
                     <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4" /> 2 Year Warranty
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </main>

      {/* Recommended Section */}
      <section className="border-t border-slate-200 dark:border-white/5 py-24 bg-slate-50 dark:bg-[#020617]">
         <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <h2 className="text-3xl font-black tracking-tight">Complete the Look</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {[1, 2, 3, 4].map(i => (
                  <div key={i} className="group cursor-pointer space-y-4">
                     <div className="aspect-[3/4] rounded-2xl bg-white dark:bg-white/5 overflow-hidden relative">
                        <img 
                           src={`https://images.unsplash.com/photo-${1510000000000 + i * 100000}?auto=format&fit=crop&q=60&w=300`}
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                           alt="Related"
                           loading="lazy"
                           decoding="async"
                        />
                        <div className="absolute top-4 left-4">
                           <span className="px-2 py-1 bg-white dark:bg-black rounded-lg text-[10px] font-bold uppercase tracking-widest">Running</span>
                        </div>
                     </div>
                     <div>
                        <h3 className="font-bold text-lg group-hover:text-rose-500 transition-colors">Essentials Tee</h3>
                        <div className="text-slate-500 font-medium">$45.00</div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default EcommerceTemplate;
