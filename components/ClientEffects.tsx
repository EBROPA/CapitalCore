"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!revealEls.length) return;

    revealEls.forEach((el) => el.classList.remove("is-visible"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const parallaxEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]")
    );
    if (!parallaxEls.length) return;

    const breakpoint = 1024;
    let ticking = false;
    let isActive = false;

    const applyStaticState = () => {
      parallaxEls.forEach((el) => {
        el.style.transform = "";
      });
    };

    const update = () => {
      parallaxEls.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax ?? "0.2");
        el.style.transform = `translate3d(0, ${window.scrollY * speed}px, 0)`;
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    const detach = () => {
      if (isActive) {
        window.removeEventListener("scroll", onScroll);
        isActive = false;
      }
      applyStaticState();
    };

    const attach = () => {
      if (isActive) return;
      window.addEventListener("scroll", onScroll, { passive: true });
      isActive = true;
      update();
    };

    const evaluate = () => {
      if (window.innerWidth < breakpoint) {
        detach();
      } else {
        attach();
      }
    };

    evaluate();
    window.addEventListener("resize", evaluate);

    return () => {
      window.removeEventListener("resize", evaluate);
      detach();
    };
  }, [pathname]);

  useEffect(() => {
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
    const handler = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLAnchorElement;
      const id = target.getAttribute("href")?.replace("#", "");
      if (!id) return;
      const section = document.getElementById(id);
      if (!section) return;
      event.preventDefault();
      section.scrollIntoView({ behavior: "smooth" });
    };
    links.forEach((link) => link.addEventListener("click", handler));
    return () => links.forEach((link) => link.removeEventListener("click", handler));
  }, [pathname]);

  useEffect(() => {
    const bars = Array.from(document.querySelectorAll<HTMLElement>("[data-progress]"));
    if (!bars.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const value = entry.target.getAttribute("data-progress") ?? "0";
            entry.target.setAttribute("style", `width: ${value}%;`);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    bars.forEach((bar) => observer.observe(bar));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const formatPhone = (value: string) => {
      const digits = value.replace(/\D/g, "").slice(0, 11);
      const parts = ["+7 ("];
      if (digits.length > 1) {
        parts.push(digits.slice(1, 4));
      }
      if (digits.length >= 4) {
        parts.push(") ", digits.slice(4, 7));
      }
      if (digits.length >= 7) {
        parts.push("-", digits.slice(7, 9));
      }
      if (digits.length >= 9) {
        parts.push("-", digits.slice(9, 11));
      }
      return parts.join("").replace(/\) $/, ") ");
    };

    const phoneInputs = Array.from(
      document.querySelectorAll<HTMLInputElement>(".input-shell--phone input")
    );
    phoneInputs.forEach((input) => {
      const handler = (event: Event) => {
        const target = event.currentTarget as HTMLInputElement;
        if (!target.value) return;
        target.value = formatPhone(`7${target.value.replace(/\D/g, "").slice(0, 10)}`);
      };
      input.addEventListener("input", handler);
      input.addEventListener("blur", handler);
    });
    return () => {
      phoneInputs.forEach((input) => {
        input.replaceWith(input.cloneNode(true));
      });
    };
  }, [pathname]);

  useEffect(() => {
    const formatPhone = (value: string) => {
      let digits = value.replace(/\D/g, "");
      if (!digits) return "";
      if (digits.startsWith("8")) {
        digits = `7${digits.slice(1)}`;
      }
      if (!digits.startsWith("7")) {
        digits = `7${digits}`;
      }
      digits = digits.slice(0, 11);
      const parts: string[] = ["+7"];
      if (digits.length > 1) {
        parts.push(" (", digits.slice(1, 4));
      }
      if (digits.length >= 4) {
        parts.push(") ", digits.slice(4, 7));
      }
      if (digits.length >= 7) {
        parts.push("-", digits.slice(7, 9));
      }
      if (digits.length >= 9) {
        parts.push("-", digits.slice(9, 11));
      }
      return parts.join("");
    };

    const phoneInputs = Array.from(
      document.querySelectorAll<HTMLInputElement>(".js-phone-input")
    );
    if (!phoneInputs.length) return;

    const disposers = phoneInputs.map((input) => {
      const handleBlur = () => {
        input.value = formatPhone(input.value);
      };
      input.addEventListener("blur", handleBlur);
      return () => input.removeEventListener("blur", handleBlur);
    });

    return () => disposers.forEach((dispose) => dispose());
  }, [pathname]);

  useEffect(() => {
    const formatNumber = (value: string) => {
      const digits = value.replace(/\D/g, "");
      if (!digits) return "";
      return digits.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    const numberInputs = Array.from(
      document.querySelectorAll<HTMLInputElement>(".js-number-input")
    );
    if (!numberInputs.length) return;

    const disposers = numberInputs.map((input) => {
      const handler = () => {
        input.value = formatNumber(input.value);
      };
      input.addEventListener("input", handler);
      input.addEventListener("blur", handler);
      handler();
      return () => {
        input.removeEventListener("input", handler);
        input.removeEventListener("blur", handler);
      };
    });

    return () => disposers.forEach((dispose) => dispose());
  }, [pathname]);

  useEffect(() => {
    const interactiveItems = Array.from(
      document.querySelectorAll<HTMLElement>(".interactive-card")
    );
    if (!interactiveItems.length) return;

    const disposers = interactiveItems.map((item) => {
      const handleMove = (event: MouseEvent) => {
        const rect = item.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        item.style.setProperty("--pointer-x", `${x}%`);
        item.style.setProperty("--pointer-y", `${y}%`);
        item.style.setProperty("--pointer-opacity", "1");
      };

      const handleLeave = () => {
        item.style.setProperty("--pointer-opacity", "0");
      };

      item.addEventListener("mousemove", handleMove);
      item.addEventListener("mouseleave", handleLeave);

      return () => {
        item.removeEventListener("mousemove", handleMove);
        item.removeEventListener("mouseleave", handleLeave);
      };
    });

    return () => disposers.forEach((dispose) => dispose());
  }, [pathname]);

  useEffect(() => {
    const forms = Array.from(document.querySelectorAll<HTMLFormElement>(".js-inline-form"));
    if (!forms.length) return;

    const disposers = forms.map((form) => {
      const handler = (event: Event) => {
        event.preventDefault();
        const button = form.querySelector<HTMLButtonElement>("button[type='submit']");
        if (button) {
          button.textContent = button.dataset.successLabel ?? "Отправлено";
          button.disabled = true;
        }
        form.classList.add("is-submitted");
      };
      form.addEventListener("submit", handler);
      return () => form.removeEventListener("submit", handler);
    });

    return () => disposers.forEach((dispose) => dispose());
  }, [pathname]);

  useEffect(() => {
    const modal = document.querySelector<HTMLElement>(".contact-modal");
    if (!modal) return;

    const body = document.body;
    const openModal = (event?: Event) => {
      event?.preventDefault();
      modal.classList.add("is-open");
      body.classList.add("modal-open");
    };

    const closeModal = (event?: Event) => {
      event?.preventDefault();
      modal.classList.remove("is-open");
      body.classList.remove("modal-open");
    };

    const openers = Array.from(
      document.querySelectorAll<HTMLElement>("[data-modal-target='contact']")
    );
    const closers = Array.from(
      modal.querySelectorAll<HTMLElement>("[data-modal-close]")
    );
    const backdrop = modal.querySelector<HTMLElement>(".contact-modal__backdrop");

    openers.forEach((opener) => opener.addEventListener("click", openModal));
    closers.forEach((closer) => closer.addEventListener("click", closeModal));
    backdrop?.addEventListener("click", closeModal);

    const escHandler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", escHandler);

    return () => {
      openers.forEach((opener) => opener.removeEventListener("click", openModal));
      closers.forEach((closer) => closer.removeEventListener("click", closeModal));
      backdrop?.removeEventListener("click", closeModal);
      document.removeEventListener("keydown", escHandler);
    };
  }, [pathname]);

  return null;
}

