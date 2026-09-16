'use client';

import React from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronsLeftRight,
  ShieldCheck,
  Users,
  Clock,
  Droplet,
  Zap,
  Wrench,
  Home,
  Building2,
  Settings,
  Cctv,
  MessageSquare,
  FileText,
  Check,
  Award,
  Calendar,
  Quote,
  Star,
  Phone,
  Mail,
  MapPin,
  ChevronUp,
  User,
  Handshake,
  Navigation,
  List,
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';

export const IconArrow = ({ className = "w-4 h-4", ...props }) => (
  <ArrowRight className={className} {...props} />
);

export const IconLeft = ({ className = "w-4 h-4", ...props }) => (
  <ChevronLeft className={className} {...props} />
);

export const IconRight = ({ className = "w-4 h-4", ...props }) => (
  <ChevronRight className={className} {...props} />
);

export const IconLeftRight = ({ className = "w-4 h-4", ...props }) => (
  <ChevronsLeftRight className={className} {...props} />
);

export const IconShield = ({ className = "w-7 h-7", ...props }) => (
  <ShieldCheck className={className} {...props} />
);

export const IconTeam = ({ className = "w-7 h-7", ...props }) => (
  <Users className={className} {...props} />
);

export const IconClock = ({ className = "w-7 h-7", ...props }) => (
  <Clock className={className} {...props} />
);

export const IconDrop = ({ className = "w-6 h-6", ...props }) => (
  <Droplet className={className} fill="currentColor" {...props} />
);

export const IconBolt = ({ className = "w-6 h-6", ...props }) => (
  <Zap className={className} fill="currentColor" {...props} />
);

export const IconTools = ({ className = "w-6 h-6", ...props }) => (
  <Wrench className={className} {...props} />
);

export const IconHome = ({ className = "w-6 h-6", ...props }) => (
  <Home className={className} fill="currentColor" {...props} />
);

export const IconBuilding = ({ className = "w-6 h-6", ...props }) => (
  <Building2 className={className} fill="currentColor" {...props} />
);

export const IconGear = ({ className = "w-6 h-6", ...props }) => (
  <Settings className={className} fill="currentColor" {...props} />
);

export const IconCctv = ({ className = "w-6 h-6", ...props }) => (
  <Cctv className={className} {...props} />
);

export const IconChat = ({ className = "w-7 h-7", ...props }) => (
  <MessageSquare className={className} {...props} />
);

export const IconDoc = ({ className = "w-7 h-7", ...props }) => (
  <FileText className={className} {...props} />
);

export const IconCheck = ({ className = "w-7 h-7", ...props }) => (
  <Check className={className} strokeWidth={3} {...props} />
);

export const IconMedal = ({ className = "w-8 h-8", ...props }) => (
  <Award className={className} {...props} />
);

export const IconCal = ({ className = "w-8 h-8", ...props }) => (
  <Calendar className={className} {...props} />
);

export const IconQuote = ({ className = "w-11 h-11", ...props }) => (
  <Quote className={className} fill="currentColor" {...props} />
);

export const IconStar = ({ className = "w-5 h-5", ...props }) => (
  <Star className={className} fill="currentColor" stroke="none" {...props} />
);

export const IconPhone = ({ className = "w-4 h-4", ...props }) => (
  <Phone className={className} fill="currentColor" {...props} />
);

export const IconMail = ({ className = "w-4 h-4", ...props }) => (
  <Mail className={className} fill="none" {...props} />
);

export const IconPin = ({ className = "w-4 h-4", ...props }) => (
  <MapPin className={className} fill="currentColor" {...props} />
);

export const IconFacebook = ({ className = "w-4 h-4", ...props }) => (
  <FaFacebookF className={className} {...props} />
);

export const IconInstagram = ({ className = "w-4 h-4", ...props }) => (
  <FaInstagram className={className} {...props} />
);

export const IconLinkedIn = ({ className = "w-4 h-4", ...props }) => (
  <FaLinkedinIn className={className} {...props} />
);

export const IconUp = ({ className = "w-5 h-5", ...props }) => (
  <ChevronUp className={className} {...props} />
);

export const IconUser = ({ className = "w-4 h-4", ...props }) => (
  <User className={className} {...props} />
);

export const IconHandshake = ({ className = "w-6 h-6", ...props }) => (
  <Handshake className={className} {...props} />
);

export const IconWhatsapp = ({ className = "w-4 h-4", ...props }) => (
  <FaWhatsapp className={className} {...props} />
);

export const IconNavigation = ({ className = "w-4 h-4", ...props }) => (
  <Navigation className={className} {...props} />
);

export const IconList = ({ className = "w-4 h-4", ...props }) => (
  <List className={className} {...props} />
);
