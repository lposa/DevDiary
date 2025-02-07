# 🌐 Google Cloud VPC - Brief Overview

A **VPC (Virtual Private Cloud)** in Google Cloud is like a **private network** for your resources (Cloud Run, VMs, Kubernetes, etc.). It controls how they communicate **internally** and **externally** (Internet, APIs, other services).

Each VPC has:
- ✅ **Subnets** → Define IP ranges within the VPC
- ✅ **Firewall Rules** → Control allowed inbound/outbound traffic
- ✅ **Routes** → Decide where traffic is sent (internal or external)
- ✅ **NAT (Network Address Translation)** → Allows private resources to access the internet

Since **your VPC blocks all outbound traffic**, your Cloud Run service **can't reach Microsoft Teams**.

---

## 🛠 How to Allow Only Microsoft Teams Webhook & Block Everything Else

Yes! You **can** allow just the Microsoft Teams Webhook while blocking all other outbound traffic.  
Here's how:

### 1️⃣ Use VPC Firewall Rules (Not the best for webhooks)
- You can create a **firewall egress rule** to allow traffic only to Microsoft's IPs
- **Issue:** Microsoft Teams **uses dynamic IPs**, so this isn't reliable

---

### 2️⃣ Use Cloud NAT with a Custom Route (Recommended)
Since Microsoft Teams Webhook is an **external URL**, the best way is:

1. **Set up Cloud NAT** → So your Cloud Run can access external services
2. **Use a Private Google DNS Override** → Resolve only the Teams Webhook
3. **Block all other outbound traffic**

### Steps

#### ✅ Step 1: Set up Cloud NAT (Network Address Translation)
This allows **only selected traffic** to leave your VPC.

- Go to **Google Cloud Console** → **VPC Network** → **Cloud NAT**
- Create a new NAT gateway **inside your VPC**
- Attach it to your **Cloud Router**

#### ✅ Step 2: Allow Only Microsoft Teams Webhook
1. Go to **VPC Network** → **Firewall Rules**
2. **Create a new egress rule**:
    - **Target** → Cloud Run service
    - **Destination IP Ranges** → Look up Microsoft Teams Webhook IP ranges (**⚠️ These may change**)
    - **Ports** → 443 (HTTPS)
    - **Priority** → Lower than the default "deny all" rule

#### ✅ Step 3: Block All Other Traffic
1. Create a **Deny All Outbound** rule:
    - **Target** → Cloud Run
    - **Destination IP** → `0.0.0.0/0` (All internet)
    - **Priority** → Higher than your Teams Webhook rule

---

## 🎯 Alternative: Use a Proxy Instead
If Microsoft Teams' IPs **keep changing**, another way is to:
- Set up a **proxy in GCP**
- Whitelist **only the proxy** in your VPC
- Use the proxy **to call Microsoft Teams Webhook**

---

## 🚀 Summary
Since **your VPC blocks outbound traffic**, Cloud Run **cannot reach Microsoft Teams**.

- 🔹 **Solution**: Set up **Cloud NAT + Firewall Rules**
- 🔹 **Allow only Microsoft Teams Webhook** by **whitelisting its IPs**
- 🔹 **Block all other traffic** with a strict **deny all** rule

Would you like help setting up Cloud NAT & firewall rules? 🚀
