'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, FileQuestion, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setMounted(true);
    setViewport({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // console.error('404 Error:', pathname);
  }, [pathname]);

  return (
    <div className="min-h-screen gradient-primary flex items-center justify-center p-4 overflow-hidden relative">
      {/* Floating particles (SSR safe) */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              initial={{
                x: Math.random() * viewport.width,
                y: Math.random() * viewport.height,
              }}
              animate={{
                y: [null, Math.random() * -200 - 100],
                opacity: [0.2, 0.6, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      {/* Glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.2, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="relative mb-8"
        >
          <motion.div
            className="text-[150px] sm:text-[200px] font-black text-transparent bg-clip-text bg-linear-to-br from-white via-white/80 to-white/40 leading-none select-none"
            animate={{
              textShadow: [
                '0 0 20px rgba(255,255,255,0.3)',
                '0 0 40px rgba(255,255,255,0.5)',
                '0 0 20px rgba(255,255,255,0.3)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            404
          </motion.div>

          {/* Floating icon */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl">
              <FileQuestion className="w-10 h-10 sm:w-12 sm:h-12 text-white/80" />
            </div>
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          Page Not Found
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg sm:text-xl text-white/70 mb-8 max-w-md mx-auto"
        >
          Oops! The page you're looking for seems to have vanished into the digital void.
        </motion.p>


        {/* Attempted path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <code className="text-sm text-white/80 font-mono">
              {pathname}
            </code>
          </div>
        </motion.div>


        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            size="lg"
            className="gap-2 min-w-40px"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>

          <Link href="/">
            <Button variant="gradient" size="lg" className="gap-2 min-w-40px">
              <Home className="w-4 h-4" />
              Return Home
            </Button>
          </Link>
        </div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 h-px bg-linear-to-r from-transparent via-white/30 to-transparent"
        />

        {/* Footer text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-sm text-white/50"
        >
          Lost? Don't worry, even the best explorers take a wrong turn sometimes.
        </motion.p>

      </div>
    </div>
  );
};

export default NotFound;
